import { basketActions, getBasketProducts } from "entities/Basket"
import { Product } from "entities/Product"
import { AddToBasketIcon, BasketSuccessIcon } from "shared/assets/icons/others"
import { MouseEvent } from "react"
import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import { Button, ButtonVariant } from "shared/ui/Button/Button"
import { ToggleBasketIcon } from "shared/ui/ToggleBasketIcon/ToggleBasketIcon"
import styles from "./ToggleProductInBasket.module.scss"

export enum ToggleProductInBasketVariant {
    ICON = "icon",
    BUTTON = "button",
}

interface ToggleProductInBasketProps {
    product?: Product
    variant: ToggleProductInBasketVariant
}

export function ToggleProductInBasket({ product, variant }: ToggleProductInBasketProps) {
    const basketProducts = useSelector(getBasketProducts)
    const dispatch = useDispatch()

    const { t } = useTranslation()

    if (!product) return null

    const { id } = product

    const isProductInBasket = basketProducts.some(item => item.id === id)

    function clickHandler(e: MouseEvent) {
        e.stopPropagation()
        if (isProductInBasket) {
            dispatch(basketActions.removeFromBasket(id))
        } else if (product) {
            dispatch(basketActions.addToBasket(product))
        }
    }

    switch (variant) {
        case ToggleProductInBasketVariant.ICON:
            return (
                <ToggleBasketIcon
                    onClick={clickHandler}
                    isFilled={isProductInBasket}
                    className={styles.icon}
                />
            )
        case ToggleProductInBasketVariant.BUTTON:
            return isProductInBasket ? (
                <Button onClick={clickHandler} className={styles.btnRemove}>
                    <BasketSuccessIcon className={styles.iconSuccess} />
                    {t("basketTakeOutBtn")}
                </Button>
            ) : (
                <Button
                    onClick={clickHandler}
                    className={styles.btnAdd}
                    variant={ButtonVariant.FILLED}
                >
                    <AddToBasketIcon className={styles.iconToBasket} />
                    {t("basketAddBtn")}
                </Button>
            )

        default:
            return null
    }
}

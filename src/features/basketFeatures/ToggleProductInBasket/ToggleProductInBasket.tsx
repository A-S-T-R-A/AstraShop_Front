import { basketActions, getBasketProducts } from "entities/Basket"
import { Product } from "entities/Product"
import { MouseEvent } from "react"
import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import { Button } from "shared/ui/Button/Button"
import { ToggleBasketIcon } from "shared/ui/ToggleBasketIcon/ToggleBasketIcon"
import styles from "./ToggleProductInBasket.module.scss"

export enum ToggleProductInBasketVariant {
    ICON = "icon",
    BUTTON = "button",
}

interface ToggleProductInBasketProps {
    product: Product
    variant: ToggleProductInBasketVariant
}

export function ToggleProductInBasket({ product, variant }: ToggleProductInBasketProps) {
    const { id } = product

    const basketProducts = useSelector(getBasketProducts)
    const dispatch = useDispatch()

    const { t } = useTranslation()

    const isProductInBasket = basketProducts.some(item => item.id === id)

    function clickHandler(e: MouseEvent) {
        e.stopPropagation()
        if (isProductInBasket) {
            dispatch(basketActions.removeFromBasket(id))
        } else {
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
            return (
                <Button onClick={clickHandler} className={styles.btn}>
                    {isProductInBasket ? `${t("basketTakeOutBtn")}` : `${t("basketAddBtn")}`}
                </Button>
            )
        default:
            return null
    }
}

import { basketActions, getBasketProducts } from "entities/Basket"
import { Product } from "entities/Product"
import { MouseEvent } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Button } from "shared/ui/Button/Button"
import { ToggleBasketIcon } from "shared/ui/ToggleBasketIcon/ToggleBasketIcon"

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
            return <ToggleBasketIcon onClick={clickHandler} isFilled={isProductInBasket} />
        case ToggleProductInBasketVariant.BUTTON:
            return (
                <Button onClick={clickHandler}>
                    {isProductInBasket ? "Убрать из корзины" : "Добавить в корзину"}
                </Button>
            )
        default:
            return null
    }
}

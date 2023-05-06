import { MinusIcon, PlusIcon } from "shared/assets/icons/others"
import { ChangeEvent } from "react"
import { useDispatch, useSelector } from "react-redux"
import { basketActions, getBasketProductQuantityById } from "entities/Basket"
import styles from "./ChangeProductAmountInBasket.module.scss"

interface ChangeProductAmountInBasketProps {
    id: number
}

export function ChangeProductAmountInBasket({ id }: ChangeProductAmountInBasketProps) {
    const dispatch = useDispatch()
    const quantity = useSelector(getBasketProductQuantityById(id))

    function increment() {
        dispatch(basketActions.incrementInBasket(id))
    }

    function decrement() {
        dispatch(basketActions.decrementInBasket(id))
    }

    function setQuantity(e: ChangeEvent) {
        const target = e.target as HTMLInputElement
        const { value } = target
        const quantity = Number(value)

        if (Number.isNaN(quantity)) return
        if (quantity < 1) return

        dispatch(basketActions.setQuantityInBasket({ id, quantity }))
    }

    return (
        <div className={styles.container}>
            <MinusIcon className={styles.icon} onClick={decrement} />
            <input type="text" value={quantity} className={styles.input} onChange={setQuantity} />
            <PlusIcon className={styles.icon} onClick={increment} />
        </div>
    )
}

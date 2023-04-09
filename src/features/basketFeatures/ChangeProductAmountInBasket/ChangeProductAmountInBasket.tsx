import { MinusIcon, PlusIcon } from "shared/assets/icons/others"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import { useDispatch, useSelector } from "react-redux"
import { getBasketProductQuantityById } from "entities/Basket/model/selectors/basketSelectors"
import { basketActions } from "entities/Basket"
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

    return (
        <div className={styles.container}>
            <MinusIcon className={styles.icon} onClick={decrement} />
            <Typography variant={TypographyVariant.P}>{quantity}</Typography>
            <PlusIcon className={styles.icon} onClick={increment} />
        </div>
    )
}

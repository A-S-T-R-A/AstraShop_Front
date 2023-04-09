import { basketActions } from "entities/Basket"
import { useDispatch } from "react-redux"
import { DeleteBucketIcon } from "shared/assets/icons/others"
import styles from "./RemoveProductFromBasket.module.scss"

interface RemoveProductFromBasketProps {
    id: number
}

export function RemoveProductFromBasket({ id }: RemoveProductFromBasketProps) {
    const dispatch = useDispatch()

    function clickHandler() {
        dispatch(basketActions.removeFromBasket(id))
    }

    return <DeleteBucketIcon onClick={clickHandler} className={styles.delete} />
}

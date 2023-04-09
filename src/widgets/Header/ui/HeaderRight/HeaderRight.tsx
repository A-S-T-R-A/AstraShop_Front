import { getModalsCurrent, modalsActions, ModalsList } from "entities/ModalSlider"
import { getBasketProducts, SmallBasket } from "entities/Basket"
import { useDispatch, useSelector } from "react-redux"
import { CrossIcon } from "shared/assets/icons/others"
import styles from "./HeaderRight.module.scss"

export function HeaderRight() {
    const dispatch = useDispatch()
    const currentModal = useSelector(getModalsCurrent)
    const basketProducts = useSelector(getBasketProducts)

    const totalProducts = basketProducts
        ?.map(item => item.quantity || 1)
        .reduce((acc: number, val: number) => acc + val, 0)

    return currentModal === ModalsList.BASKET && window.innerWidth < 769 ? (
        <CrossIcon onClick={() => dispatch(modalsActions.close())} className={styles.cross} />
    ) : (
        <SmallBasket
            className={styles.basket}
            onClick={() => dispatch(modalsActions.openBasket())}
            basketCount={totalProducts || 0}
        />
    )
}

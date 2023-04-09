import { Copyright } from "entities/Copyright/Copyright"
import { Logo } from "entities/Logo/Logo"
import { SearchProduct } from "features/SearchProduct"
import { NavigationList, NavigationListVariant } from "entities/NavigationList"
import { getModalsCurrent, modalsActions, ModalSlider, ModalsList } from "entities/ModalSlider"
import { useDispatch, useSelector } from "react-redux"
import styles from "./BurgerMenu.module.scss"

export function BurgerMenu() {
    const currentModal = useSelector(getModalsCurrent)
    const dispatch = useDispatch()

    function onClose() {
        dispatch(modalsActions.close())
    }

    return (
        <ModalSlider
            isOpen={currentModal === ModalsList.BURGER}
            onClose={onClose}
            className={styles.wrapper}
        >
            <div className={styles.container}>
                <Logo className={styles.logo} onClick={onClose} />
                <SearchProduct className={styles.searchbar} />
                <NavigationList
                    className={styles.navlist}
                    onLinkClick={onClose}
                    variant={NavigationListVariant.MOBILE}
                />
                <Copyright />
            </div>
        </ModalSlider>
    )
}

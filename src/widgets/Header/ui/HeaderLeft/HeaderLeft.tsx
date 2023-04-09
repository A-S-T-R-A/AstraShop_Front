import { getModalsCurrent, modalsActions, ModalsList } from "entities/ModalSlider"
import { useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { CrossIcon, MobileBurgerIcon } from "shared/assets/icons/others"
import { classNames } from "shared/lib/classNames/classNames"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import styles from "./HeaderLeft.module.scss"

interface HeaderLeftProps {
    className?: string
}

export function HeaderLeft({ className }: HeaderLeftProps) {
    const dispatch = useDispatch()

    const currentModal = useSelector(getModalsCurrent)

    const switcher = useMemo(() => {
        switch (currentModal) {
            case ModalsList.BURGER:
                return (
                    <CrossIcon
                        onClick={() => dispatch(modalsActions.close())}
                        className={styles.icon}
                    />
                )
            case ModalsList.BASKET:
                return window.innerWidth < 769 ? (
                    <Typography variant={TypographyVariant.H3}>Корзина</Typography>
                ) : (
                    <MobileBurgerIcon
                        className={styles.icon}
                        onClick={() => dispatch(modalsActions.openBurger())}
                    />
                )
            default:
                return (
                    <MobileBurgerIcon
                        className={styles.icon}
                        onClick={() => dispatch(modalsActions.openBurger())}
                    />
                )
        }
    }, [currentModal, dispatch])

    return <div className={classNames(styles.container, {}, [className])}>{switcher}</div>
}

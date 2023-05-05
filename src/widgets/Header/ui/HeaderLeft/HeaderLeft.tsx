import { getModalsCurrent, modalsActions, ModalsList } from "entities/ModalSlider"
import { useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { CrossIcon, MobileBurgerIcon } from "shared/assets/icons/others"
import { classNames } from "shared/lib/classNames/classNames"
import { useTranslation } from "react-i18next"
import { Typography, TypographyColor, TypographyVariant } from "shared/ui/Typography/Typography"
import styles from "./HeaderLeft.module.scss"

interface HeaderLeftProps {
    className?: string
    isMainPage?: boolean
}

export function HeaderLeft({ className, isMainPage }: HeaderLeftProps) {
    const dispatch = useDispatch()

    const currentModal = useSelector(getModalsCurrent)

    const { t } = useTranslation()

    const switcher = useMemo(() => {
        switch (currentModal) {
            case ModalsList.BURGER:
                return (
                    <CrossIcon
                        onClick={() => dispatch(modalsActions.close())}
                        className={classNames(styles.icon, { [styles.inverted]: isMainPage })}
                    />
                )
            case ModalsList.BASKET:
                return window.innerWidth < 769 ? (
                    <Typography
                        variant={TypographyVariant.H3}
                        color={isMainPage ? TypographyColor.INVERTED : TypographyColor.BASE}
                    >
                        {t("basket")}
                    </Typography>
                ) : (
                    <MobileBurgerIcon
                        className={classNames(styles.icon, { [styles.inverted]: isMainPage })}
                        onClick={() => dispatch(modalsActions.openBurger())}
                    />
                )
            default:
                return (
                    <MobileBurgerIcon
                        className={classNames(styles.icon, { [styles.inverted]: isMainPage })}
                        onClick={() => dispatch(modalsActions.openBurger())}
                    />
                )
        }
    }, [currentModal, dispatch, t, isMainPage])

    return <div className={classNames(styles.container, {}, [className])}>{switcher}</div>
}

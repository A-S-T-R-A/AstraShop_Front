import { useDispatch, useSelector } from "react-redux"
import { ShoppingBagIcon } from "shared/assets/icons/others"
import { Button, ButtonVariant } from "shared/ui/Button/Button"
import {
    getModalsCurrent,
    modalsActions,
    ModalSlider,
    ModalSliderVariant,
    ModalsList,
} from "entities/ModalSlider"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import { useTranslation } from "react-i18next"
import styles from "./ErrorOrderModal.module.scss"

export function ErrorOrderModal() {
    const isSlideTop = window.innerWidth < 769

    const { t } = useTranslation()
    const dispatch = useDispatch()
    const value = useSelector(getModalsCurrent)

    const isOpen = value === ModalsList.ORDER_ERROR

    function onClose() {
        dispatch(modalsActions.close())
    }

    return (
        <ModalSlider
            isOpen={isOpen}
            onClose={onClose}
            className={isSlideTop ? styles.sliderWrapper : styles.wrapper}
            variant={isSlideTop ? ModalSliderVariant.SLIDER : ModalSliderVariant.MODAL}
        >
            <ShoppingBagIcon className={styles.shoppingBag} />
            <Typography
                className={styles.title}
                variant={isSlideTop ? TypographyVariant.H3 : TypographyVariant.H1}
            >
                {t("emptyBasket")}
            </Typography>
            <Button onClick={onClose} variant={ButtonVariant.FILLED} className={styles.btn}>
                {t("returnBtn")}
            </Button>
        </ModalSlider>
    )
}

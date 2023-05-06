import { useDispatch, useSelector } from "react-redux"
import { CrossIcon, ShoppingBagIcon } from "shared/assets/icons/others"
import { Button, ButtonVariant } from "shared/ui/Button/Button"
import {
    getModalsCurrent,
    modalsActions,
    ModalSlider,
    ModalSliderVariant,
    ModalsList,
} from "entities/ModalSlider"
import { useTranslation } from "react-i18next"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import styles from "./PaymentErrorModal.module.scss"

export function PaymentErrorModal() {
    const isSlideTop = window.innerWidth < 769

    const { t } = useTranslation()
    const dispatch = useDispatch()
    const value = useSelector(getModalsCurrent)

    const isOpen = value === ModalsList.PAYMENT_ERROR

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
            <CrossIcon className={styles.closeBtn} onClick={onClose} />
            <ShoppingBagIcon className={styles.shoppingBag} />
            <Typography
                className={styles.title}
                variant={isSlideTop ? TypographyVariant.H3 : TypographyVariant.H1}
            >
                {t("paymentError")}
            </Typography>
            <Typography className={styles.text} variant={TypographyVariant.P}>
                {t("paymentNotAccepted")}
            </Typography>
            <Button variant={ButtonVariant.FILLED} className={styles.btn} onClick={onClose}>
                {t("returnBtn")}
            </Button>
        </ModalSlider>
    )
}

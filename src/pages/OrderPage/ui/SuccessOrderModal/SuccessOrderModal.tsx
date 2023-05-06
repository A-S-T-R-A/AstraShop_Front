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
import styles from "./SuccessOrderModal.module.scss"

export function SuccessOrderModal() {
    const isSlideTop = window.innerWidth < 769

    const dispatch = useDispatch()
    const value = useSelector(getModalsCurrent)

    const { t } = useTranslation()

    const isOpen = value === ModalsList.SUCCESS

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
                {t("successfulPayment")}
            </Typography>
            <Typography className={styles.text} variant={TypographyVariant.P}>
                {t("orderDetailsSent")}
            </Typography>
            <Button variant={ButtonVariant.FILLED} className={styles.btn} onClick={onClose}>
                {t("return")}
            </Button>
        </ModalSlider>
    )
}

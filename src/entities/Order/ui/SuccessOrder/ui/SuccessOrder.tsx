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
import styles from "./SuccessOrder.module.scss"

export function SuccessOrder() {
    const isSlideTop = window.innerWidth < 769

    const dispatch = useDispatch()
    const value = useSelector(getModalsCurrent)

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
                Спасибо за ваш заказ
            </Typography>
            <Typography className={styles.text} variant={TypographyVariant.P}>
                Наш менеджер свяжется с Вами в ближайшее время и уточнит детали заказа
            </Typography>
            <Button variant={ButtonVariant.FILLED_RED} className={styles.btn}>
                Продолжить покупки
            </Button>
        </ModalSlider>
    )
}

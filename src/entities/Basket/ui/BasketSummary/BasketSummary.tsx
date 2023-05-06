import { modalsActions } from "entities/ModalSlider"
import { useDispatch, useSelector } from "react-redux"
import { classNames } from "shared/lib/classNames/classNames"
import { Button, ButtonVariant } from "shared/ui/Button/Button"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import { useTranslation } from "react-i18next"
import styles from "./BasketSummary.module.scss"
import {
    getBasketProductsTotalPrice,
    getBasketProductsTotalQuantity,
} from "../../model/selectors/basketSelectors"

export enum BasketSummaryVariant {
    DEFAULT = "default",
    VERTICAL = "vertical",
}

interface BasketSummaryProps {
    isCentered?: boolean
    className?: string
    variant?: BasketSummaryVariant
    onOrderClick: () => void
    onExitClick?: () => void
}

export function BasketSummary(props: BasketSummaryProps) {
    const {
        isCentered = false,
        className,
        variant = BasketSummaryVariant.DEFAULT,
        onOrderClick,
        onExitClick,
    } = props

    const dispatch = useDispatch()

    function closeModalHandler() {
        dispatch(modalsActions.close())
    }

    function orderClickHandler() {
        closeModalHandler()
        onOrderClick?.()
    }

    function exitClickHandler() {
        closeModalHandler()
        onExitClick?.()
    }

    const totalPrice = useSelector(getBasketProductsTotalPrice)
    const totalQuantity = useSelector(getBasketProductsTotalQuantity)

    const currency = "$"

    const { t } = useTranslation()

    return (
        <div
            className={classNames(styles.container, { [styles.centered]: isCentered }, [
                className,
                styles[variant],
            ])}
        >
            <div className={styles.info}>
                <Typography variant={TypographyVariant.H4} isBold>
                    {t("basketTotal")}
                </Typography>
                <Typography isBold className={styles.totalPrice}>
                    {`${totalPrice} ${currency}`}
                </Typography>
                <Typography variant={TypographyVariant.H4}>
                    {t("basketNumberOfProducts")}
                </Typography>
                <Typography className={styles.totalProducts}>{totalQuantity}</Typography>
            </div>
            <div className={styles.buttons}>
                <Button onClick={orderClickHandler} variant={ButtonVariant.FILLED}>
                    {t("basketConfirmTheOrder")}
                </Button>
                <Button onClick={exitClickHandler}>{t("continueShopping")}</Button>
            </div>
        </div>
    )
}

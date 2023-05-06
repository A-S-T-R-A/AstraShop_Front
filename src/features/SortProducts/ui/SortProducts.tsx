import { classNames } from "shared/lib/classNames/classNames"
import { useDispatch, useSelector } from "react-redux"
import { Button, ButtonVariant } from "shared/ui/Button/Button"
import { Typography, TypographyColor } from "shared/ui/Typography/Typography"
import { useTranslation } from "react-i18next"
import styles from "./SortProducts.module.scss"
import { sortProductsOrderType } from "../model/types/types"
import { getSortProductsOrder } from "../model/selectors/sortProductsSelectors"
import { sortProductsAction } from "../model/slice/sortProductsSlice"

interface SortProductsProps {
    className?: string
    onChangeSort?: () => void
}

export function SortProducts(props: SortProductsProps) {
    const { className, onChangeSort } = props

    const dispatch = useDispatch()
    const sortOrderPattern = useSelector(getSortProductsOrder)

    function clickHandler(order: sortProductsOrderType) {
        dispatch(sortProductsAction.setOrder(order))
        onChangeSort?.()
    }

    const { t } = useTranslation()

    return (
        <div className={classNames(styles.container, {}, [className])}>
            <Typography color={TypographyColor.DARK_GRAY}>{t("sortBy")}</Typography>
            <Button
                className={styles.btn}
                variant={
                    sortOrderPattern === sortProductsOrderType.ASC
                        ? ButtonVariant.FILLED
                        : ButtonVariant.OUTLINED
                }
                onClick={() => clickHandler(sortProductsOrderType.ASC)}
            >
                {t("sortByLowToHigh")}
            </Button>
            <Button
                className={styles.btn}
                variant={
                    sortOrderPattern === sortProductsOrderType.DESC
                        ? ButtonVariant.FILLED
                        : ButtonVariant.OUTLINED
                }
                onClick={() => clickHandler(sortProductsOrderType.DESC)}
            >
                {t("sortByHighToLow")}
            </Button>
        </div>
    )
}

import { classNames } from "shared/lib/classNames/classNames"
import { Button, ButtonVariant } from "shared/ui/Button/Button"
import { Typography, TypographyColor } from "shared/ui/Typography/Typography"
import styles from "./SortProducts.module.scss"
import { sortProductsOrderType } from "../model/types"

interface SortProductsProps {
    sortOrderPattern: sortProductsOrderType
    onClick: (pattern: sortProductsOrderType) => void
    className?: string
}

export function SortProducts(props: SortProductsProps) {
    const { className, sortOrderPattern, onClick } = props

    return (
        <div className={classNames(styles.container, {}, [className])}>
            <Typography color={TypographyColor.DARK_GRAY}>Сортировать</Typography>
            <Button
                className={styles.btn}
                variant={
                    sortOrderPattern === sortProductsOrderType.ASC
                        ? ButtonVariant.FILLED_RED
                        : ButtonVariant.OUTLINE
                }
                onClick={() => onClick?.(sortProductsOrderType.ASC)}
            >
                По возрастанию
            </Button>
            <Button
                className={styles.btn}
                variant={
                    sortOrderPattern === sortProductsOrderType.DESC
                        ? ButtonVariant.FILLED_RED
                        : ButtonVariant.OUTLINE
                }
                onClick={() => onClick?.(sortProductsOrderType.DESC)}
            >
                По убыванию
            </Button>
        </div>
    )
}

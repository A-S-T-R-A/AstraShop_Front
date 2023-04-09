import { Button, ButtonVariant } from "shared/ui/Button/Button"
import { Typography, TypographyColor, TypographyVariant } from "shared/ui/Typography/Typography"
import styles from "./EmptyBasket.module.scss"

interface EmptyBasketProps {
    onClose: () => void
}

export function EmptyBasket({ onClose }: EmptyBasketProps) {
    return (
        <div className={styles.container}>
            <Typography
                variant={TypographyVariant.H3}
                color={TypographyColor.DARK_GRAY}
                className={styles.emptyBasketText}
            >
                Пусто
            </Typography>
            <Button variant={ButtonVariant.FILLED_RED} onClick={onClose}>
                Продолжить покупки
            </Button>
        </div>
    )
}

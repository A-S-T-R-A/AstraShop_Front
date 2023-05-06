import { Button, ButtonVariant } from "shared/ui/Button/Button"
import { Typography, TypographyColor, TypographyVariant } from "shared/ui/Typography/Typography"
import { useTranslation } from "react-i18next"
import styles from "./EmptyBasket.module.scss"

interface EmptyBasketProps {
    onClose: () => void
}

export function EmptyBasket({ onClose }: EmptyBasketProps) {
    const { t } = useTranslation()
    return (
        <div className={styles.container}>
            <Typography
                variant={TypographyVariant.H3}
                color={TypographyColor.DARK_GRAY}
                className={styles.emptyBasketText}
            >
                {t("empty")}
            </Typography>
            <Button variant={ButtonVariant.FILLED} onClick={onClose}>
                {t("continueShopping")}
            </Button>
        </div>
    )
}

import { Typography, TypographyColor, TypographyVariant } from "shared/ui/Typography/Typography"
import { useCountdown } from "../lib/useCountdown/useCountdown"
import styles from "./SaleCountdown.module.scss"

export function SaleCountdown() {
    const { hours, minutes, seconds } = useCountdown("2023-05-05T12:00:00Z")

    return (
        <Typography
            className={styles.countdown}
            variant={TypographyVariant.H3}
            color={TypographyColor.INVERTED}
        >
            {`${hours}:${minutes}:${seconds}`}
        </Typography>
    )
}

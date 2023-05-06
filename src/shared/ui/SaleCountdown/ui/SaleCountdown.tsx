import { useCountdown } from "../lib/useCountdown/useCountdown"
import styles from "./SaleCountdown.module.scss"

export function SaleCountdown() {
    const { hours, minutes, seconds } = useCountdown("2030-05-05T12:00:00Z")

    return <div className={styles.countdown}>{`${hours}:${minutes}:${seconds}`}</div>
}

import { AddToBasketIcon, BasketSuccessIcon } from "shared/assets/icons/others"
import { MouseEvent } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import styles from "./ToggleBasketIcon.module.scss"

interface ToggleBasketIconProps {
    onClick: (e: MouseEvent) => void
    isFilled: boolean
    className?: string
}

export function ToggleBasketIcon({ onClick, isFilled = false, className }: ToggleBasketIconProps) {
    return (
        <div onClick={onClick} className={classNames(styles.iconContainer, {}, [className])}>
            {isFilled ? (
                <BasketSuccessIcon className={styles.iconSuccess} />
            ) : (
                <AddToBasketIcon className={styles.iconAdd} />
            )}
        </div>
    )
}

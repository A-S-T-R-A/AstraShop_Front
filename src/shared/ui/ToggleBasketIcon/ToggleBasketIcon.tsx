import { AddToBasket, BasketSuccess } from "shared/assets/icons/others"
import { classNames } from "shared/lib/classNames/classNames"
import styles from "./ToggleBasketIcon.module.scss"

interface ToggleBasketIconProps {
    onClick: () => void
    isFilled: boolean
    className?: string
}

export function ToggleBasketIcon({ onClick, isFilled = false, className }: ToggleBasketIconProps) {
    return (
        <div onClick={onClick} className={classNames(styles.iconContainer, {}, [className])}>
            {isFilled ? (
                <BasketSuccess className={styles.basketSuccess} />
            ) : (
                <AddToBasket className={styles.addToBasket} />
            )}
        </div>
    )
}

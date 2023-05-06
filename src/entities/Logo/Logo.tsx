import { Link } from "react-router-dom"
import { ShoppingBagIcon } from "shared/assets/icons/others"
import { classNames } from "shared/lib/classNames/classNames"
import styles from "./Logo.module.scss"

export enum LogoVariant {
    NORMAL = "normal",
    INVERTED = "inverted",
}

interface LogoProps {
    className?: string
    onClick?: () => void
    variant?: LogoVariant
}

export function Logo({ className, onClick, variant = LogoVariant.NORMAL }: LogoProps) {
    return (
        <div className={classNames(styles.container, {}, [className, styles[variant]])}>
            <Link
                to="/"
                style={{ textDecoration: "none" }}
                onClick={onClick}
                className={styles.link}
            >
                <ShoppingBagIcon className={styles.icon} />
                <p className={styles.name}>AstraShop</p>
            </Link>
        </div>
    )
}

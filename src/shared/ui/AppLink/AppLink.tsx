import { classNames } from "shared/lib/classNames/classNames"
import { Link, LinkProps } from "react-router-dom"
import { ReactNode } from "react"
import styles from "./AppLink.module.scss"

export enum AppLinkVariant {
    NORMAL = "normal",
    INVERTED = "inverted",
}

interface AppLinkProps extends LinkProps {
    className?: string
    children: ReactNode
    variant?: AppLinkVariant
}

export function AppLink(props: AppLinkProps) {
    const { to, className, children, variant = AppLinkVariant.NORMAL, ...otherProps } = props

    return (
        <Link
            to={to}
            className={classNames(styles.AppLink, {}, [className, styles[variant]])}
            {...otherProps}
            data-testid="AppLink"
        >
            {children}
        </Link>
    )
}

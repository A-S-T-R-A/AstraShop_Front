import { classNames } from "shared/lib/classNames/classNames"
import { Link, LinkProps } from "react-router-dom"
import { ReactNode } from "react"
import styles from "./AppLink.module.scss"

interface AppLinkProps extends LinkProps {
    className?: string
    children: ReactNode
}

export function AppLink(props: AppLinkProps) {
    const { to, className, children, ...otherProps } = props

    return (
        <Link
            to={to}
            className={classNames(styles.AppLink, {}, [className])}
            {...otherProps}
            data-testid="AppLink"
        >
            {children}
        </Link>
    )
}

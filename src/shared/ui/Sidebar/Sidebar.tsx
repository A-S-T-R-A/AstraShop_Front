import { ReactNode } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import styles from "./Sidebar.module.scss"

interface SidebarProps {
    children: ReactNode
    className?: string
}

export function Sidebar(props: SidebarProps) {
    const { children, className } = props

    return (
        <div className={classNames(styles.wrapper, {}, [className])}>
            <div className={styles.container}>{children}</div>
        </div>
    )
}

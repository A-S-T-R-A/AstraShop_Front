import { ReactElement, ReactNode, useMemo } from "react"
import styles from "./Layout.module.scss"
import { getLayoutColumns } from "../../../lib/getLayoutColumns"

type columnType = "left" | "right"

interface ILayoutIsland {
    children: ReactNode
    height?: CSSDimensionType
    column: columnType
}

export function LayoutIsland({ children, height = "auto", column }: ILayoutIsland) {
    return (
        <div style={{ height }} className={styles.island}>
            {children}
        </div>
    )
}

export function Layout({ children }: { children: ReactElement[] }) {
    const { all, left, right } = useMemo(() => {
        const columns: columnType[] = ["left", "right"]
        return getLayoutColumns(children, columns)
    }, [children])

    return (
        <div className={styles.container}>
            <div className={styles.all}>{all.map(item => item)}</div>
            <div className={styles.left}>{left?.map(item => item)}</div>
            <div className={styles.right}>{right?.map(item => item)}</div>
        </div>
    )
}

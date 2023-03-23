import { classNames } from "shared/lib/classNames/classNames"
import { AppLink } from "shared/ui/AppLink/AppLink"
import { Typography } from "shared/ui/Typography/Typography"
import styles from "./LinksList.module.scss"

interface ListItemType {
    id: string
    text: string
    path: string
}

export interface LinksListItem {
    title: string
    list: ListItemType[]
}

interface LinksListProps {
    data: LinksListItem
    className?: string
}

export function LinksList({ data, className }: LinksListProps) {
    const { title, list } = data

    return (
        <div className={classNames(styles.container, {}, [className])}>
            <Typography className={styles.title}>{title}</Typography>
            <div className={styles.list}>
                {list.map(item => {
                    const { id, text, path } = item
                    return (
                        <AppLink key={id} to={path}>
                            {text}
                        </AppLink>
                    )
                })}
            </div>
        </div>
    )
}

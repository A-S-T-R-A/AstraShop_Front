import { memo } from "react"
import { useLocation } from "react-router-dom"
import { classNames } from "shared/lib/classNames/classNames"
import { AppLink } from "shared/ui/AppLink/AppLink"
import { desktopItemsList, mobileItemsList } from "../model/list"
import styles from "./NavigationList.module.scss"

export enum NavigationListVariant {
    MOBILE = "mobile",
    DESKTOP = "desktop",
}

interface NavigationListProps {
    className?: string
    variant: NavigationListVariant
    onLinkClick?: () => void
}

export const NavigationList = memo((props: NavigationListProps) => {
    const { className, onLinkClick, variant } = props

    const { pathname } = useLocation()

    const list = variant === NavigationListVariant.MOBILE ? mobileItemsList : desktopItemsList

    return (
        <div className={classNames(styles.list, {}, [className])}>
            {list.map(item => {
                const { id, path, text, Icon } = item
                return (
                    <AppLink
                        key={id}
                        to={path}
                        className={classNames(
                            styles.link,
                            { [styles.active]: path === pathname },
                            []
                        )}
                        onClick={onLinkClick}
                    >
                        {!!Icon && <Icon className={styles.menuItem} />}
                        {text}
                    </AppLink>
                )
            })}
        </div>
    )
})

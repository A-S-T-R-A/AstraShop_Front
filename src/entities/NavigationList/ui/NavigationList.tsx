import { ReactNode, memo } from "react"
import { useLocation } from "react-router-dom"
import { classNames } from "shared/lib/classNames/classNames"
import { AppLink, AppLinkVariant } from "shared/ui/AppLink/AppLink"
import { useTranslation } from "react-i18next"
import { desktopItemsList, mobileItemsList } from "../model/list"
import styles from "./NavigationList.module.scss"

export enum NavigationListColor {
    NORMAL = "normal",
    INVERTED = "inverted",
}

export enum NavigationListVariant {
    MOBILE = "mobile",
    DESKTOP = "desktop",
}

interface NavigationListProps {
    className?: string
    variant: NavigationListVariant
    onLinkClick?: () => void
    ChangeLanguage?: ReactNode
    color?: NavigationListColor
}

export const NavigationList = memo((props: NavigationListProps) => {
    const {
        className,
        onLinkClick,
        variant,
        ChangeLanguage,
        color = NavigationListColor.INVERTED,
    } = props

    const { pathname } = useLocation()

    const { t } = useTranslation()

    const list = variant === NavigationListVariant.MOBILE ? mobileItemsList : desktopItemsList
    const isInverted = color === NavigationListColor.INVERTED

    return (
        <div className={classNames(styles.list, {}, [className])}>
            <div className={styles.changeLanguage}>{!!ChangeLanguage && ChangeLanguage}</div>
            {list.map(item => {
                const { id, path, text } = item
                return (
                    <AppLink
                        key={id}
                        to={path}
                        variant={
                            isInverted && variant !== NavigationListVariant.MOBILE
                                ? AppLinkVariant.INVERTED
                                : AppLinkVariant.NORMAL
                        }
                        className={classNames(
                            styles.link,
                            {
                                [styles.active]: path === pathname,
                            },
                            []
                        )}
                        onClick={onLinkClick}
                    >
                        {t(text)}
                    </AppLink>
                )
            })}
        </div>
    )
})

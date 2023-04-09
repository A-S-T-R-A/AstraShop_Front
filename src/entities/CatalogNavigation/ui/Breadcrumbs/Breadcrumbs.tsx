import React from "react"
import { AppLink } from "shared/ui/AppLink/AppLink"
import { useSelector } from "react-redux"
import { ChevronBack, MainHome } from "shared/assets/icons/others"
import { RoutePath } from "shared/config/routeConfig/routeConfig"
import { classNames } from "shared/lib/classNames/classNames"
import { getCurrentTree } from "../../model/selectors/sidebarNavigationSelectors"
import { CurrentTreeItem, CurrentTreeItemType } from "../../model/types/catalogNavigationSchema"
import styles from "./Breadcrumbs.module.scss"

export function Breadcrumbs() {
    const currentTree = useSelector(getCurrentTree)

    const data: CurrentTreeItem[] = [
        { id: 0, name: "Catalog", type: CurrentTreeItemType.CATALOG },
        ...currentTree,
    ]

    return (
        <div className={styles.breadcrumbs}>
            <AppLink to={RoutePath.main}>
                <MainHome className={styles.home} />
            </AppLink>
            {data.map((route, index) => {
                const { name, id, type } = route
                const link = () => {
                    switch (type) {
                        case CurrentTreeItemType.CATALOG:
                            return RoutePath.catalog
                        case CurrentTreeItemType.CATEGORY:
                            return RoutePath.category + id
                        case CurrentTreeItemType.SUB_CATEGORY:
                            return RoutePath.sub_category + id
                        case CurrentTreeItemType.PRODUCT:
                            return RoutePath.product_details + id
                        default:
                            return RoutePath.main
                    }
                }

                return (
                    <React.Fragment key={id}>
                        <ChevronBack className={styles.icon} />
                        <div className={styles.crumbs}>
                            <AppLink
                                to={link()}
                                className={classNames(styles.link, {
                                    [styles.active]: index === data.length - 1,
                                })}
                            >
                                {name}
                            </AppLink>
                        </div>
                    </React.Fragment>
                )
            })}
        </div>
    )
}

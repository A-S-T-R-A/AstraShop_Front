import React, { useEffect, useRef, useState } from "react"
import { AppLink } from "shared/ui/AppLink/AppLink"
import { useSelector } from "react-redux"
import { ChevronBack, MainHome } from "shared/assets/icons/others"
import { RoutePath } from "shared/config/routeConfig/const"
import { classNames } from "shared/lib/classNames/classNames"
import { Portal } from "shared/ui/Modal/ui/components/Portal"
import { getCurrentTree } from "../../model/selectors/sidebarNavigationSelectors"
import { CurrentTreeItem, CurrentTreeItemType } from "../../model/types/catalogNavigationSchema"
import styles from "./Breadcrumbs.module.scss"

export function Breadcrumbs() {
    const [toolTip, setToolTip] = useState(-1)

    const currentTree = useSelector(getCurrentTree)

    const data: CurrentTreeItem[] = [
        { id: 228, name: "Catalog", type: CurrentTreeItemType.CATALOG },
        ...currentTree,
    ]

    const breacrumbsRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (breacrumbsRef.current) {
            breacrumbsRef.current.scrollLeft = 1000
        }
    })
    return (
        <div className={styles.breadcrumbs} ref={breacrumbsRef}>
            <AppLink to={RoutePath.main}>
                <MainHome className={styles.home} />
            </AppLink>

            {data.map((route, index, array) => {
                const { name, id, type } = route
                const link = () => {
                    switch (type) {
                        case CurrentTreeItemType.CATALOG:
                            return RoutePath.catalog
                        case CurrentTreeItemType.CATEGORY:
                            return `${RoutePath.category}/${id}`
                        case CurrentTreeItemType.SUB_CATEGORY:
                            return `${RoutePath.sub_category}/${id}`
                        case CurrentTreeItemType.PRODUCT:
                            return `${RoutePath.product_details}/${id}`
                        default:
                            return RoutePath.main
                    }
                }

                const lastEl = document.querySelector("#toolTip")
                const coordinate = lastEl?.getBoundingClientRect()

                return (
                    <React.Fragment key={id}>
                        <ChevronBack className={styles.icon} />
                        <div
                            className={styles.crumbs}
                            onMouseEnter={() => {
                                setToolTip(index)
                            }}
                            onMouseLeave={() => setToolTip(-1)}
                        >
                            <AppLink
                                to={link()}
                                className={classNames(styles.link, {
                                    [styles.active]: index === data.length - 1,
                                })}
                                id={index === array.length - 1 ? "toolTip" : ""}
                            >
                                {name?.length > 20 ? `${name.substring(0, 20)}...` : name}
                            </AppLink>
                            {name?.length > 20 && toolTip === index && (
                                <Portal>
                                    <p
                                        style={{
                                            top: `${Number(coordinate?.top) + 24}px`,
                                            left: `${Number(coordinate?.left) - 150}px`,
                                        }}
                                        className={styles.toolTip}
                                    >
                                        {name}
                                    </p>
                                </Portal>
                            )}
                        </div>
                    </React.Fragment>
                )
            })}
        </div>
    )
}

import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RoutePath } from "shared/config/routeConfig/const"
import { AppLink } from "shared/ui/AppLink/AppLink"
import { BoxIcon } from "shared/assets/icons/list"
import { ChevronRightSimple } from "shared/assets/icons/others"
import styles from "./CatalogSidebarNav.module.scss"
import { CatalogModal } from "./CatalogModal/CatalogModal"
import { SubCatalogModal } from "./SubCatalogModal/SubCatalogModal"
import { navigationTreeType } from "../../../model/types/list"
import { fetchNavigationTree } from "../../../model/services/fetchNavigationTree/fetchNavigationTree"
import {
    getNavigationTree,
    getNavigationTreeError,
} from "../../../model/selectors/sidebarNavigationSelectors"

export function CatalogSidebarNav() {
    const [hovered, setHovered] = useState(-1)
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)

    function modalOpenHandler() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
            timeoutRef.current = null
        }
        timeoutRef.current = setTimeout(() => {
            setModalIsOpen(true)
        }, 200)
    }

    function modalCloseHandler() {
        setModalIsOpen(false)
        setHovered(-1)
    }

    function mouseEnterHandler(id: number) {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
            timeoutRef.current = null
        }
        timeoutRef.current = setTimeout(() => {
            setHovered(id)
        }, 200)
    }

    const mouseLeaveHandler = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
    }

    const dispatch = useDispatch()
    const navigationTree: navigationTreeType = useSelector(getNavigationTree)
    const error = useSelector(getNavigationTreeError)

    useEffect(() => {
        if (!navigationTree.length && !error) {
            dispatch(fetchNavigationTree())
        }
    }, [dispatch, navigationTree, error])

    const containerRef = useRef<HTMLDivElement>(null)
    const containerWidth = containerRef.current?.clientWidth
    const containerHeight = containerRef.current?.clientHeight
    const containerCoordinate = containerRef.current?.getBoundingClientRect()

    return (
        <div className={styles.wrapper} ref={containerRef}>
            <div className={styles.container}>
                {navigationTree.map(item => {
                    const { id, icon } = item
                    return (
                        <div
                            key={id}
                            className={styles.linkContainer}
                            onMouseEnter={modalOpenHandler}
                            onMouseLeave={mouseLeaveHandler}
                        >
                            {icon ? <img src={icon} alt="svg" /> : <BoxIcon />}
                            <AppLink
                                to={`${RoutePath.category}/${id}`}
                                onClick={() => setHovered(-1)}
                                className={styles.link}
                            >
                                {item.name}
                            </AppLink>
                            <ChevronRightSimple size={14} />
                        </div>
                    )
                })}
            </div>
            <CatalogModal
                isOpen={modalIsOpen}
                onClose={modalCloseHandler}
                styles={{
                    width: `${containerWidth}px`,
                    height: `${containerHeight}px`,
                    top: `${Number(containerCoordinate?.top)}px`,
                    left: `${Number(containerCoordinate?.left)}px`,
                }}
                className={styles.modal}
                navTree={navigationTree}
                mouseEnter={id => mouseEnterHandler(id)}
                mouseLeave={mouseLeaveHandler}
            />
            <SubCatalogModal
                styles={{
                    height: `${containerHeight}px`,
                    top: `${Number(containerCoordinate?.top)}px`,
                    left: `${Number(containerCoordinate?.right)}px`,
                }}
                isOpen={hovered !== -1}
                onClose={modalCloseHandler}
                className={styles.subMenuModal}
                navTree={navigationTree}
                hoveredId={hovered}
            />
        </div>
    )
}

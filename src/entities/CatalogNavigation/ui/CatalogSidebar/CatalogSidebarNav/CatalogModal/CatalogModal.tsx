import { classNames, Mods } from "shared/lib/classNames/classNames"
import { CSSProperties, useEffect, useState } from "react"
import { BoxIcon } from "shared/assets/icons/list"
import { AppLink } from "shared/ui/AppLink/AppLink"
import { ChevronRightSimple } from "shared/assets/icons/others"
import { RoutePath } from "shared/config/routeConfig/const"
import { navigationTreeType } from "../../../../model/types/list"
import { Portal } from "../Portal/Portal"
import cls from "./CatalogModal.module.scss"

interface ModalProps {
    className?: string
    isOpen: boolean
    navTree: navigationTreeType
    styles?: CSSProperties
    mouseEnter: (id: number) => void
    mouseLeave: () => void
    onClose: () => void
}

export const CatalogModal = (props: ModalProps) => {
    const { className, isOpen, styles, mouseEnter, mouseLeave, navTree, onClose } = props
    const [isOpening, setIsOpening] = useState(false)
    const [isClosing, setIsClosing] = useState(false)
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        if (isOpen && !isMounted) {
            document.body.classList.add("noScroll")
            setIsOpening(true)
            setIsMounted(true)
            setTimeout(() => {
                setIsOpening(false)
            }, 200)
        } else if (!isOpen && isMounted) {
            document.body.classList.remove("noScroll")
            setIsClosing(true)
            setTimeout(() => {
                setIsClosing(false)
                setIsMounted(false)
            }, 100)
        }
    }, [isOpen, isMounted])

    const mods: Mods = {
        [cls.isOpen]: isMounted,
        [cls.isClosing]: isClosing,
        [cls.isOpening]: isOpening,
    }

    if (!isMounted) return null

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={() => onClose?.()} />
                <div className={cls.content} style={styles} onClick={e => e.stopPropagation()}>
                    <div className={cls.modalContainer}>
                        {navTree?.map(item => {
                            const { id, icon } = item
                            return (
                                <div
                                    key={id}
                                    onMouseEnter={() => mouseEnter(id)}
                                    onMouseLeave={mouseLeave}
                                    className={cls.modalLinkContainer}
                                >
                                    {icon ? <img src={icon} alt="svg" /> : <BoxIcon />}
                                    <AppLink
                                        to={`${RoutePath.category}/${id}`}
                                        onClick={() => onClose?.()}
                                        className={cls.modalLink}
                                    >
                                        {item.name}
                                    </AppLink>
                                    <ChevronRightSimple size={14} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </Portal>
    )
}

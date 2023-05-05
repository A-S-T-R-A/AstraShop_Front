import { CSSProperties, useEffect, useState } from "react"
import { classNames, Mods } from "shared/lib/classNames/classNames"
import { AppLink } from "shared/ui/AppLink/AppLink"
import { RoutePath } from "shared/config/routeConfig/const"
import { CrossIcon } from "shared/assets/icons/others"
import { navigationSubcategory, navigationTreeType } from "../../../../model/types/list"
import { Portal } from "../Portal/Portal"
import cls from "./SubCatalogModal.module.scss"

interface SubMenuProps {
    list: navigationSubcategory[]
    isOpen: boolean
    className?: string
    onLinkClick?: () => void
}

function SubMenu({ list, isOpen, onLinkClick, className }: SubMenuProps) {
    if (!isOpen) return null

    return (
        <div className={classNames(cls.subMenu, {}, [className])}>
            {list.map(item => {
                const { id, name } = item
                return (
                    <AppLink key={id} to={`${RoutePath.sub_category}/${id}`} onClick={onLinkClick}>
                        {name}
                    </AppLink>
                )
            })}
        </div>
    )
}

interface ModalProps {
    className?: string
    isOpen: boolean
    navTree: navigationTreeType
    hoveredId: number
    styles: CSSProperties
    onClose: () => void
}

export const SubCatalogModal = (props: ModalProps) => {
    const { className, isOpen, onClose, styles, navTree, hoveredId } = props
    const [isOpening, setIsOpening] = useState(false)
    const [isClosing, setIsClosing] = useState(false)
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        if (isOpen && !isMounted) {
            setIsOpening(true)
            setIsMounted(true)
            setTimeout(() => {
                setIsOpening(false)
            }, 200)
        } else if (!isOpen && isMounted) {
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

    if (!isOpen) return null

    return (
        <Portal>
            <div className={classNames(cls.modal, mods, [className])} onClick={() => onClose?.()}>
                <div className={cls.content} style={styles} onClick={e => e.stopPropagation()}>
                    {navTree?.map(item => {
                        const { id, categories: subCategories } = item
                        return (
                            <div
                                key={id}
                                className={classNames(
                                    cls.subMenuModalContainer,
                                    { [cls.none]: hoveredId !== id },
                                    []
                                )}
                            >
                                <SubMenu
                                    list={subCategories}
                                    isOpen={
                                        hoveredId === id &&
                                        !!subCategories &&
                                        subCategories?.length > 0
                                    }
                                    onLinkClick={() => onClose?.()}
                                />
                            </div>
                        )
                    })}
                    <CrossIcon className={cls.crossIcon} onClick={() => onClose?.()} />
                </div>
            </div>
        </Portal>
    )
}

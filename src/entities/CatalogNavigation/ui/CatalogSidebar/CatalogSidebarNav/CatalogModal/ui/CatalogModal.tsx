import { classNames, Mods } from "shared/lib/classNames/classNames"
import { CSSProperties, ReactNode, useEffect, useState } from "react"
import cls from "./CatalogModal.module.scss"
import { Portal } from "./components/Portal"

interface ModalProps {
    className?: string
    children: ReactNode
    isOpen: boolean
    styles?: CSSProperties
    onClose: () => void
}

export const CatalogModal = (props: ModalProps) => {
    const { className, children, isOpen, onClose, styles } = props
    const [isClosing, setIsClosing] = useState(false)
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        if (isOpen && !isMounted) {
            setIsMounted(true)
        } else if (!isOpen && isMounted) {
            setIsClosing(true)
            setTimeout(() => {
                setIsClosing(false)
                setIsMounted(false)
            }, 500)
        }
    }, [isOpen, isMounted])

    const mods: Mods = {
        [cls.isOpen]: isMounted,
        [cls.isClosing]: isClosing,
    }

    if (!isMounted) return null

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={() => onClose?.()}>
                    <div className={cls.content} style={styles} onClick={e => e.stopPropagation()}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}
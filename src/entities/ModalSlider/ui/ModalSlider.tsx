import { ReactNode, useEffect, useRef } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { Modal } from "shared/ui/Modal/Modal"
import styles from "./ModalSlider.module.scss"

export enum ModalSliderVariant {
    SLIDER = "slider",
    MODAL = "modal",
}

export enum ModalSliderDirection {
    TOP = "top",
    RIGHT = "right",
}

interface ModalSliderProps {
    isOpen: boolean
    onClose: () => void
    children: ReactNode
    className?: string
    direction?: ModalSliderDirection
    variant?: ModalSliderVariant
    containerHeight?: string
}

export function ModalSlider(props: ModalSliderProps) {
    const {
        isOpen,
        onClose,
        children,
        className,
        direction = ModalSliderDirection.TOP,
        variant = ModalSliderVariant.SLIDER,
        containerHeight,
    } = props
    const wrapperRef = useRef(null)

    const wrapperClassName = classNames(
        styles.wrapper,
        {
            [styles.open]: isOpen,
        },
        [className, styles[direction]]
    )

    function closeHandler(e: React.MouseEvent) {
        if (e.target === wrapperRef.current) {
            onClose()
        }
    }

    useEffect(() => {
        document.documentElement.classList.toggle("noScroll", isOpen)
    }, [isOpen])

    return variant === ModalSliderVariant.MODAL ? (
        <Modal isOpen={isOpen} onClose={onClose} className={className}>
            {children}
        </Modal>
    ) : (
        <div className={wrapperClassName} onClick={closeHandler} ref={wrapperRef}>
            <div className={styles.container} style={{ height: containerHeight }}>
                {children}
            </div>
        </div>
    )
}

import { ReactNode, useEffect, useRef } from "react"
import { useSelector } from "react-redux"
import { classNames } from "shared/lib/classNames/classNames"
import { Modal } from "shared/ui/Modal"
import styles from "./ModalSlider.module.scss"
import { getModalsCurrent } from "../model/selectors/getModalsCurrent/getModalsCurrent"

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
    const currentModal = useSelector(getModalsCurrent)

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
        if (currentModal) {
            document.body.classList.add("noScroll")
        } else {
            document.body.classList.remove("noScroll")
        }
    }, [currentModal])

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

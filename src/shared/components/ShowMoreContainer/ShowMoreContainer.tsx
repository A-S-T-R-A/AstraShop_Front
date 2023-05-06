import { ReactNode, useEffect, useRef, useState } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { useDebounce } from "shared/lib/hooks/useDebounce/useDebounce"
import { Button } from "shared/ui/Button/Button"
import styles from "./ShowMoreContainer.module.scss"

interface IShowMoreContainerProps {
    children: ReactNode
    buttonText: [string, string]
}

export function ShowMoreContainer(props: IShowMoreContainerProps) {
    const { children, buttonText } = props

    const [width, setWidth] = useState(0)
    const [isOverflowing, setIsOverflowing] = useState(false)
    const [isExpanded, setIsExpanded] = useState(false)

    const containerRef = useRef<HTMLDivElement>(null)

    const debouncedResizeHandler = useDebounce(() => {
        setWidth(window.innerWidth)
    }, 500)

    function scrollToTopHandler() {
        containerRef.current?.scrollTo(0, 0)
    }

    useEffect(() => {
        window.addEventListener("resize", debouncedResizeHandler)
        return () => window.removeEventListener("resize", debouncedResizeHandler)
    }, [debouncedResizeHandler])

    useEffect(() => {
        if (!containerRef?.current) return
        const bool = containerRef.current.scrollHeight > containerRef.current.clientHeight
        setIsOverflowing(bool)
    }, [width, containerRef.current?.clientHeight])

    useEffect(() => {
        const ref = containerRef.current
        ref?.addEventListener("scroll", scrollToTopHandler)
        return () => ref?.removeEventListener("scroll", scrollToTopHandler)
    }, [])

    return (
        <div
            className={classNames(styles.wrapper, {
                [styles.expanded]: isExpanded,
                [styles.overflowing]: isOverflowing,
            })}
        >
            <div ref={containerRef} className={styles.container}>
                {children}
            </div>
            {(isOverflowing || isExpanded) && (
                <div className={styles.btnContainer}>
                    <Button onClick={() => setIsExpanded(prev => !prev)} className={styles.btn}>
                        {isExpanded ? buttonText[1] : buttonText[0]}
                    </Button>
                </div>
            )}
        </div>
    )
}

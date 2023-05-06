import { useEffect, useState } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { useDebounce } from "shared/lib/hooks/useDebounce/useDebounce"
import { ChevronTop } from "shared/assets/icons/others"
import styles from "./ScrollToTop.module.scss"

interface IScrollToTopProps {
    className?: string
    offsetY?: number
}

export function ScrollToTop({ className, offsetY = 300 }: IScrollToTopProps) {
    const [isShow, setIsShow] = useState(false)

    const buttonVisibilityHandler = useDebounce(() => setIsShow(window.pageYOffset > offsetY), 500)

    useEffect(() => {
        window.addEventListener("scroll", buttonVisibilityHandler)
        return () => {
            window.removeEventListener("scroll", buttonVisibilityHandler)
        }
    }, [buttonVisibilityHandler])

    function clickHandler() {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return isShow ? (
        <button className={classNames(styles.button, {}, [className])} onClick={clickHandler}>
            <ChevronTop />
        </button>
    ) : null
}

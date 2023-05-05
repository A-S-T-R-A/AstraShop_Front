import { useCallback, useEffect, useState } from "react"
import { useDebounce } from "shared/lib/hooks/useDebounce/useDebounce"
import { useNavigate } from "react-router-dom"
import { classNames } from "shared/lib/classNames/classNames"
import { ChevronLeft, ChevronRight } from "shared/assets/icons/others"
import { DeviceType, getCurrentDevice } from "../../lib/getCurrentDeviceBanner"
import { bannerSliderList as slides } from "../../const/lists"
import { SLIDER_DELAY } from "../../const/const"
import styles from "./BannerSlider.module.scss"
import { BannerSkeleton } from "../BannerSkeleton/BannerSkeleton"

export function BannerSlider() {
    const [isAutoScroll, setIsAutoScroll] = useState(true)
    const [current, setCurrent] = useState(0)
    const [isHovered, setIsHovered] = useState(false)

    const navigate = useNavigate()

    const paginate = useCallback(
        (direction: "left" | "right") => {
            if (direction === "right") {
                setCurrent(prev => (current === slides.length - 1 ? 0 : prev + 1))
            }

            if (direction === "left") {
                setCurrent(prev => (current === 0 ? slides.length - 1 : prev - 1))
            }
        },
        [current]
    )

    useEffect(() => {
        const timeout = isAutoScroll ? setTimeout(() => paginate("right"), SLIDER_DELAY) : null

        return () => {
            if (timeout) {
                clearTimeout(timeout)
            }
        }
    }, [isAutoScroll, paginate])

    function paginationClickHandler(index: number) {
        setIsAutoScroll(false)
        setCurrent(index)
    }

    function navigationClickHandler(direction: "left" | "right") {
        setIsAutoScroll(false)
        paginate(direction)
    }

    const [device, setDevice] = useState<DeviceType>("desktop")

    const debouncedResizeHandler = useDebounce(() => {
        getCurrentDevice(window.innerWidth, setDevice)
    }, 500)

    useEffect(() => {
        window.addEventListener("resize", debouncedResizeHandler)
        return () => window.removeEventListener("resize", debouncedResizeHandler)
    }, [debouncedResizeHandler])

    if (!slides || !slides?.length) return null
    return (
        <div
            className={styles.container}
            onClick={() => navigate(slides[current].link)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className={styles.carousel}
                style={{ gridTemplateColumns: `repeat(${slides.length}, 100%)` }}
            >
                {slides ? (
                    slides.map(({ images, id }) => (
                        <img
                            key={id}
                            src={images[device]}
                            alt=""
                            className={styles.img}
                            style={{ transform: `translateX(-${current * 100}%)` }}
                        />
                    ))
                ) : (
                    <BannerSkeleton />
                )}
            </div>

            <div className={styles.pagination} onClick={e => e.stopPropagation()}>
                {slides.map((item, index) => (
                    <div
                        key={item.id}
                        className={classNames(styles.bullet, {
                            [styles.active]: index === current,
                        })}
                        onClick={() => paginationClickHandler(index)}
                    />
                ))}
            </div>

            <ChevronLeft
                className={classNames(styles.chevronLeftContainer, {
                    [styles.isVisible]: isHovered,
                })}
                onClick={e => {
                    e.stopPropagation()
                    navigationClickHandler("left")
                }}
            />

            <ChevronRight
                className={classNames(styles.chevronRightContainer, {
                    [styles.isVisible]: isHovered,
                })}
                onClick={e => {
                    e.stopPropagation()
                    navigationClickHandler("right")
                }}
            />
        </div>
    )
}

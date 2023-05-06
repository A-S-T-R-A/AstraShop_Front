import { useNavigate } from "react-router-dom"
import { singleBannerList as slides } from "widgets/Banner/const/lists"
import { classNames } from "shared/lib/classNames/classNames"
import { useDebounce } from "shared/lib/hooks/useDebounce/useDebounce"
import { DeviceType, getCurrentDevice } from "shared/lib/getCurrentDevice/getCurrentDevice"
import { AsyncImage, ImageFit } from "shared/ui/AsyncImage"
import { useEffect, useState } from "react"
import styles from "./SingleBanner.module.scss"

interface ISingleBannerProps {
    imgIndex: number
    className?: string
}

export function SingleBanner({ imgIndex, className }: ISingleBannerProps) {
    const banner = slides[imgIndex]
    const navigate = useNavigate()

    const [device, setDevice] = useState<DeviceType>("desktop")

    const debouncedResizeHandler = useDebounce(() => {
        getCurrentDevice(window.innerWidth, setDevice)
    }, 500)

    useEffect(() => {
        window.addEventListener("resize", debouncedResizeHandler)
        return () => window.removeEventListener("resize", debouncedResizeHandler)
    }, [debouncedResizeHandler])

    if (!banner) return null
    const { link, images } = banner
    const imgSrc = images[device]
    return (
        <div
            className={classNames(styles.container, {}, [className])}
            onClick={() => {
                navigate(link)
            }}
        >
            <AsyncImage objectFit={ImageFit.COVER} src={imgSrc} alt="" />
        </div>
    )
}

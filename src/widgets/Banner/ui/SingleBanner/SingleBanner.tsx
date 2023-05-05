import { useNavigate } from "react-router-dom"
import { singleBannerList as slides } from "widgets/Banner/const/lists"
import { classNames } from "shared/lib/classNames/classNames"
import { useDebounce } from "shared/lib/hooks/useDebounce/useDebounce"
import { useEffect, useState } from "react"
import { DeviceType, getCurrentDevice } from "../../lib/getCurrentDeviceBanner"
import styles from "./SingleBanner.module.scss"
import { BannerSkeleton } from "../BannerSkeleton/BannerSkeleton"

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
            {banner ? <img className={styles.img} src={imgSrc} alt="" /> : <BannerSkeleton />}
        </div>
    )
}

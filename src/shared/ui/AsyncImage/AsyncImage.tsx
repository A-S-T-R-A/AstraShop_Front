import { HTMLAttributes, useState } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import placeholder from "./placeholder.png"
import { Skeleton } from "./Skeleton/Skeleton"
import styles from "./AsyncImage.module.scss"

type HTMLImageAttributes = Omit<
    HTMLAttributes<HTMLImageElement>,
    "onLoad" | "className" | "onError" | "src" | "decoding"
>

export enum ImageFit {
    CONTAIN = "contain",
    COVER = "cover",
    NONE = "none",
    FILL = "fill",
    SCALE_DOWN = "scale_down",
}

interface AsyncImageProps extends HTMLImageAttributes {
    src?: string
    className?: string
    objectFit?: ImageFit
    alt?: string
}

export function AsyncImage(props: AsyncImageProps) {
    const { src, className = "", objectFit = ImageFit.CONTAIN, ...otherProps } = props

    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    function loadHandler() {
        setIsLoading(false)
    }

    function errorHandler() {
        setIsLoading(false)
        setIsError(true)
    }

    return (
        <div className={styles.imageContainer}>
            {isLoading && !isError && (
                <>
                    <Skeleton className={styles.placeholder} />
                    <img
                        src={placeholder}
                        className={styles.placeholder}
                        data-testid="loadingSkeleton"
                        alt=""
                    />
                </>
            )}

            {!src && (
                <>
                    <Skeleton className={styles.placeholder} />
                    <img
                        src={placeholder}
                        className={styles.placeholder}
                        data-testid="srcSkeleton"
                        alt=""
                    />
                </>
            )}

            {isError && src && (
                <img
                    src={placeholder}
                    className={classNames(styles.placeholderError, {}, [className])}
                    data-testid="placeholder"
                    alt=""
                />
            )}

            <img
                onLoad={loadHandler}
                onError={errorHandler}
                className={classNames(
                    styles.mainImage,
                    {
                        [styles.opacity]: isError || src === undefined,
                        [styles[objectFit]]: src,
                    },
                    [className]
                )}
                decoding="async"
                src={src}
                data-testid="async-image"
                alt=""
                {...otherProps}
            />

            <img
                src={placeholder}
                className={classNames(styles.placeholderImage, {}, [className])}
                alt=""
            />
        </div>
    )
}

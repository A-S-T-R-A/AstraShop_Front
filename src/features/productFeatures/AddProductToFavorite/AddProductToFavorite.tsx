import { Heart } from "shared/assets/icons/productCardFeatures"
import { useState } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import styles from "./AddProductToFavorite.module.scss"

interface AddProductToFavoriteProps {
    className?: string
}

export function AddProductToFavorite({ className }: AddProductToFavoriteProps) {
    const [isActive, setIsActive] = useState(false)

    function clickHandler(e: MouseEvent) {
        setIsActive(prev => !prev)
        e.stopPropagation()
    }

    return (
        <Heart
            onClick={clickHandler}
            className={classNames(styles.heartIcon, { [styles.active]: isActive }, [className])}
        />
    )
}

import { useState } from "react"
import { Scale } from "shared/assets/icons/productCardFeatures"
import { classNames } from "shared/lib/classNames/classNames"
import styles from "./CompareProducts.module.scss"

interface CompareProductsProps {
    className?: string
}

export function CompareProducts({ className }: CompareProductsProps) {
    const [isActive, setIsActive] = useState(false)

    function clickHandler(e: MouseEvent) {
        e.stopPropagation()
        setIsActive(prev => !prev)
    }

    return (
        <Scale
            className={classNames(styles.scaleIcon, { [styles.active]: isActive }, [className])}
            onClick={clickHandler}
        />
    )
}

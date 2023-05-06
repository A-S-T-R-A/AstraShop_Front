import { useState } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import productPlaceholder from "shared/assets/images/productPlaceholder.jpg"
import { v4 as uuid } from "uuid"
import { AsyncImage } from "shared/ui/AsyncImage"
import styles from "./ProductImages.module.scss"

interface ProductImagesProps {
    className?: string
    list: string[]
}

export function ProductImages({ className, list }: ProductImagesProps) {
    const [active, setActive] = useState(0)

    return (
        <div className={classNames(styles.container, {}, [className])}>
            <div className={styles.mainImg}>
                {list?.[0] ? (
                    list.map(
                        (item, index) => index === active && <AsyncImage src={item} key={uuid()} />
                    )
                ) : (
                    <img src={productPlaceholder} alt="No_Images" />
                )}
            </div>
            <div className={styles.imgRow}>
                {list.slice(0, 4).map((item, index) => (
                    <div
                        key={uuid()}
                        onClick={() => setActive(index)}
                        className={classNames(styles.secondaryImg, {
                            [styles.active]: active === index,
                        })}
                    >
                        <AsyncImage src={item} />
                    </div>
                ))}
            </div>
        </div>
    )
}

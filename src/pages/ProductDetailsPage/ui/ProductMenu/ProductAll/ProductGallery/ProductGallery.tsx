import { useState } from "react"
import { useSelector } from "react-redux"
import { v4 as uuid } from "uuid"
import { classNames } from "shared/lib/classNames/classNames"
import styles from "./ProductGallery.module.scss"
import { getProductDetailsImages } from "../../../../model/selectors/productDetailsSelectors"
/* import { mockImages } from "./mock/mock" */

export function ProductGallery() {
    const [current, setCurrent] = useState(0)

    const productImages = useSelector(getProductDetailsImages)

    return (
        <div className={styles.container}>
            <div className={styles.navigation}>
                {productImages?.map((item, index) => (
                    <div
                        key={uuid()}
                        className={classNames(styles.smallImgContainer, {
                            [styles.active]: index === current,
                        })}
                        onClick={() => setCurrent(index)}
                    >
                        <img src={item} alt="" />
                    </div>
                ))}
            </div>
            <div className={styles.bigImage}>
                {productImages?.map((item, index) => {
                    if (index === current) {
                        return <img src={item} alt="" key={uuid()} />
                    }
                    return null
                })}
            </div>
        </div>
    )
}

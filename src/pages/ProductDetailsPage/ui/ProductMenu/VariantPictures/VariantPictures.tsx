import { useSelector } from "react-redux"
import { v4 as uuid } from "uuid"
import styles from "./VariantPictures.module.scss"
import { getProductDetailsImages } from "../../../model/selectors/productDetailsSelectors"

export function VariantPictures() {
    const productImages = useSelector(getProductDetailsImages)

    return (
        <div className={styles.container}>
            {productImages?.map(item => (
                <img src={item} alt="" key={uuid()} className={styles.img} />
            ))}
        </div>
    )
}

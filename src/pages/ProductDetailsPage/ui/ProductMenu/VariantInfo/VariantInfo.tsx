import { ProductDescription } from "../ProductAll/ProductDescription/ProductDescription"
import styles from "./VariantInfo.module.scss"

export function VariantInfo() {
    return (
        <div className={styles.container}>
            <ProductDescription />
        </div>
    )
}

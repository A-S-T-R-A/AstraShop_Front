import { Skeleton } from "shared/ui/Skeleton/Skeleton"
import styles from "./ProductDetailsSkeleton.module.scss"

interface ProductDetailsSkeletonProps {
    headerStyles: string
    imagesStyles: string
    btnStyles: string
    descriptionStyles: string
}

export function ProductDetailsSkeleton(props: ProductDetailsSkeletonProps) {
    const { headerStyles, imagesStyles, btnStyles, descriptionStyles } = props

    return (
        <>
            <div className={headerStyles}>
                <Skeleton height={28} width={150} border="5px" className={styles.title} />
                <Skeleton height={18} width={70} border="5px" className={styles.isPresent} />
                <Skeleton height={32} width={70} border="5px" className={styles.price} />
            </div>

            <div className={imagesStyles} style={{ display: "flex", flexDirection: "column" }}>
                <Skeleton border="0" className={styles.mainImg} />
            </div>

            <Skeleton height={48} width={222} border="100px" className={btnStyles} />
            <div className={descriptionStyles}>
                <Skeleton height={18} width={120} border="5px" style={{ marginBottom: 8 }} />
                <Skeleton height={18} width="100%" border="5px" style={{ marginBottom: 1 }} />
                <Skeleton height={18} width="100%" border="5px" style={{ marginBottom: 1 }} />
                <Skeleton height={18} width="60%" border="5px" style={{ marginBottom: 1 }} />
            </div>
        </>
    )
}

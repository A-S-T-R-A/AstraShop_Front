import { Skeleton } from "shared/ui/Skeleton/Skeleton"
import { classNames } from "shared/lib/classNames/classNames"
import styles from "./ProductCardSaleSkeleton.module.scss"

interface ProductCarSkeletonProps {
    className?: string
}

export function ProductCardSaleSkeleton({ className }: ProductCarSkeletonProps) {
    return (
        <div className={classNames(styles.container, {}, [className])}>
            <div className={styles.header}>
                <Skeleton width="100%" />
            </div>
            <div className={styles.footer}>
                <Skeleton width="100%" height={16} />
                <div className={styles.price}>
                    <Skeleton width="50px" height={16} />
                </div>
            </div>
        </div>
    )
}

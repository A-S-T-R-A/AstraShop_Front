import { Skeleton } from "shared/ui/Skeleton/Skeleton"
import { classNames } from "shared/lib/classNames/classNames"
import styles from "./ProductCardSkeleton.module.scss"

interface ProductCarSkeletonProps {
    className?: string
}

export function ProductCardSkeleton({ className }: ProductCarSkeletonProps) {
    return (
        <div className={classNames(styles.container, {}, [className])}>
            <div className={styles.header}>
                <Skeleton width="100%" />
            </div>
            <div className={styles.footer}>
                <Skeleton width="150px" height={18} />
                <Skeleton width="125px" height={18} />
                <div className={styles.price}>
                    <Skeleton width="50px" height={18} />
                </div>
            </div>
        </div>
    )
}

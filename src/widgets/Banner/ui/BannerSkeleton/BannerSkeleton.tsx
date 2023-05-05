import { Skeleton } from "shared/ui/Skeleton/Skeleton"
import styles from "./BannerSkeleton.module.scss"

export function BannerSkeleton() {
    return <Skeleton className={styles.skeleton} />
}

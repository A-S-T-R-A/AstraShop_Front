import { RoutePath } from "shared/config/routeConfig/const"
import { classNames } from "shared/lib/classNames/classNames"
import { AppLink } from "shared/ui/AppLink/AppLink"
import { useNavigate } from "react-router-dom"
import { navigationCategory } from "entities/CatalogNavigation/model/types/list"
import productPlaceholder from "shared/assets/images/productPlaceholder.jpg"
import { AsyncImage } from "shared/ui/AsyncImage"
import { ImageFit } from "shared/ui/AsyncImage/AsyncImage"
import styles from "./CategoryLinks.module.scss"

interface CategoryLinksProps {
    data: navigationCategory
    className?: string
}

export function CategoryLinks({ data, className }: CategoryLinksProps) {
    const { id, name, categories } = data
    const navigate = useNavigate()

    return (
        <div className={classNames(styles.container, {}, [className])}>
            <AppLink to={`${RoutePath.category}/${id}`} className={styles.title}>
                {name}
            </AppLink>
            <div className={styles.listContainer}>
                {categories?.length > 0 &&
                    categories.map(item => {
                        const { id, name, image } = item
                        const categoryImage = image || productPlaceholder

                        return (
                            <div
                                key={id}
                                onClick={() => navigate(`${RoutePath.sub_category}/${id}`)}
                                className={styles.list}
                            >
                                <AsyncImage
                                    objectFit={ImageFit.COVER}
                                    src={categoryImage}
                                    alt="pic"
                                    className={styles.image}
                                />
                                <AppLink key={id} to={`${RoutePath.sub_category}/${id}`}>
                                    {name}
                                </AppLink>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import { Breadcrumbs, CatalogLinks, catalogNavigationActions } from "entities/CatalogNavigation"
import { BannersRow } from "widgets/BannersRow"
import { ProductCarousel, ProductCarouselVariant } from "widgets/ProductCarousel"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import styles from "./CatalogPage.module.scss"

export function CatalogPage() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(catalogNavigationActions.setCurrentTree([]))
    }, [dispatch])

    return (
        <div className={styles.wrapper}>
            <Breadcrumbs />
            <Typography variant={TypographyVariant.H1} className={styles.title}>
                Каталог товаров
            </Typography>
            <CatalogLinks />
            <ProductCarousel variant={ProductCarouselVariant.TOP_PRODUCTS} />
            <BannersRow />
        </div>
    )
}

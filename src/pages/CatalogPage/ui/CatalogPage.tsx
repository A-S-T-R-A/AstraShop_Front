import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import { Breadcrumbs, CatalogLinks, catalogNavigationActions } from "entities/CatalogNavigation"
import { BannersRow } from "widgets/Banner"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { ProducstRowVariant, ProductsRow } from "widgets/ProductCarousel"
import { useTranslation } from "react-i18next"
import styles from "./CatalogPage.module.scss"

export function CatalogPage() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(catalogNavigationActions.setCurrentTree([]))
    }, [dispatch])

    const { t } = useTranslation()

    return (
        <div className={styles.wrapper}>
            <Breadcrumbs />
            <Typography variant={TypographyVariant.H1} className={styles.title}>
                {t("productsCatalog")}
            </Typography>
            <CatalogLinks />
            <ProductsRow variant={ProducstRowVariant.TOP_PRODUCTS} />
            <BannersRow />
        </div>
    )
}

import { useCallback, useEffect } from "react"
import { useNavigate, useParams, useSearchParams } from "react-router-dom"
import { SortProducts } from "features/SortProducts"
import { UnexpectedError } from "shared/components/UnexpectedError/UnexpectedError"
import { RoutePath } from "shared/config/routeConfig/const"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import { useDispatch, useSelector } from "react-redux"
import { SortModalSlider } from "widgets/SortModalSlider"
import { Skeleton } from "shared/ui/Skeleton/Skeleton"
import { FilterProducts } from "features/FilterProducts"
import { Breadcrumbs } from "entities/CatalogNavigation"
import { MobileFilterControllers } from "./MobileFilterControllers/MobileFilterControllers"
import styles from "./SubCategoryPage.module.scss"
import { fetchCategoryProducts } from "../model/services/fetchCategoryProducts/fetchCategoryProducts"
import {
    getSubCategoryError,
    getSubCategoryLoading,
    getSubCategoryName,
    getSubCategoryParentId,
    getSubCategoryProducts,
} from "../model/selectors/subcategoryPageSelectors"
import { initCategoryProducts } from "../model/services/initCategoryProducts/initCategoryProducts"
import { NoProducts } from "./NoProducts/NoProducts"
import { useSetBreadcrumbs } from "../lib/useSetBreadcrumbs"
import { Products } from "./Products/Products"

export function SubCategoryPage() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()
    const categoryName = useSelector(getSubCategoryName)
    const categoryProducts = useSelector(getSubCategoryProducts)
    const categoryRequestLoading = useSelector(getSubCategoryLoading)
    const categoryRequestError = useSelector(getSubCategoryError)
    const parentCategoryId = useSelector(getSubCategoryParentId)

    useEffect(() => {
        if (id !== undefined) {
            dispatch(initCategoryProducts({ searchParams, id }))
        }
    }, [searchParams, dispatch, id])

    const updateCategoryProducts = useCallback(() => {
        dispatch(fetchCategoryProducts(id))
    }, [dispatch, id])

    useSetBreadcrumbs({ id, parentCategoryId, categoryName })

    if (categoryRequestError === "Category not found") {
        navigate(RoutePath.not_found)
        return null
    }

    if (categoryRequestError && categoryRequestError !== "No Products") {
        return <UnexpectedError />
    }

    return (
        <>
            <SortModalSlider onChangeSort={updateCategoryProducts} />
            <div className={styles.wrapper}>
                <FilterProducts
                    className={styles.sidebar}
                    onChangeFilters={updateCategoryProducts}
                />
                <div className={styles.container}>
                    <Breadcrumbs />

                    {categoryRequestLoading ? (
                        <Skeleton height={28} width={200} border="5px" className={styles.title} />
                    ) : (
                        <Typography variant={TypographyVariant.H3} className={styles.title}>
                            {categoryName}
                        </Typography>
                    )}

                    <SortProducts
                        className={styles.desktopFilters}
                        onChangeSort={updateCategoryProducts}
                    />

                    <MobileFilterControllers className={styles.mobileFilters} />

                    {categoryRequestError === "No Products" && !categoryRequestLoading ? (
                        <NoProducts
                            onReturnClick={() => {
                                navigate(`${RoutePath.category}/${parentCategoryId}`)
                            }}
                        />
                    ) : (
                        <Products isLoading={categoryRequestLoading} products={categoryProducts} />
                    )}
                </div>
            </div>
        </>
    )
}

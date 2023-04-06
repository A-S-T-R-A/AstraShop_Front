import { useCallback, useEffect, useMemo } from "react"
import { useParams } from "react-router-dom"
import { Breadcrumbs } from "entities/Breadcrumbs"
import { AppRoutes } from "shared/config/routeConfig/routeConfig"
import { SortProducts, sortProductsOrderType } from "features/SortProducts"
import { Button, ButtonVariant } from "shared/ui/Button/Button"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import { useDispatch, useSelector } from "react-redux"
import { FiltersModalSlider } from "widgets/FiltersModalSlider"
import { SortModalSlider } from "widgets/SortModalSlider"
import { ProductCard } from "entities/Product"
import { ToggleProductInBasket, ToggleProductInBasketVariant } from "features/basketFeatures"
import { ProductFilters } from "./ProductFilters/ProductFilters"
import styles from "./SubCategoryPage.module.scss"
import { fetchCategoryProducts } from "../model/services/fetchCategoryProducts/fetchCategoryProducts"
import {
    getSortOrder,
    getSubCategoryError,
    getSubCategoryLoading,
    getSubCategoryName,
    getSubCategoryProducts,
} from "../model/selectors/subcategoryPageSelectors"
import { subcategoryPageActions } from "../model/slice/subcategoryPageSlice"

export function SubCategoryPage() {
    const breadcrumbsList = [AppRoutes.CATALOG, AppRoutes.CATEGORY, AppRoutes.SUB_CATEGORY]
    const { id } = useParams()

    const dispatch = useDispatch()
    const sortOrderPattern = useSelector(getSortOrder)

    const fetchSortedData = useCallback(() => {
        dispatch(fetchCategoryProducts(id))
    }, [dispatch, id])

    useEffect(() => {
        fetchSortedData()
    }, [fetchSortedData])

    const sortClickHandler = useCallback(
        (pattern: sortProductsOrderType) => {
            dispatch(subcategoryPageActions.setSortOrder(pattern))
            fetchSortedData()
        },
        [dispatch, fetchSortedData]
    )

    const categoryName = useSelector(getSubCategoryName)
    const categoryProducts = useSelector(getSubCategoryProducts)
    const categoryRequestLoading = useSelector(getSubCategoryLoading)
    const categoryRequestError = useSelector(getSubCategoryError)

    const content = useMemo(() => {
        switch (true) {
            case categoryRequestLoading:
                return <div>Loading...</div>
            case !!categoryRequestError:
                return <div>Error</div>
            case categoryProducts?.length === 0:
                return <div>No Products</div>
            case categoryProducts?.length > 0 && !!categoryName:
                return (
                    <>
                        <Typography variant={TypographyVariant.H3} className={styles.title}>
                            {categoryName}
                        </Typography>
                        <SortProducts
                            onClick={sortClickHandler}
                            sortOrderPattern={sortOrderPattern}
                            className={styles.desktopFilters}
                        />
                        <ProductFilters className={styles.mobileFilters} />

                        <div className={styles.products}>
                            {!!categoryProducts.length &&
                                categoryProducts.map(product => {
                                    const { id, is_new: isNew, images, name, price } = product
                                    return (
                                        <ProductCard
                                            key={id}
                                            id={id}
                                            is_new={isNew}
                                            name={name}
                                            images={images}
                                            price={price}
                                            Basket={
                                                <ToggleProductInBasket
                                                    variant={ToggleProductInBasketVariant.ICON}
                                                    product={product}
                                                />
                                            }
                                        />
                                    )
                                })}
                        </div>
                        <Button variant={ButtonVariant.OUTLINE} className={styles.btn}>
                            Показать еще товар
                        </Button>
                    </>
                )
            default:
                return <div>Error</div>
        }
    }, [
        categoryName,
        categoryProducts,
        categoryRequestLoading,
        categoryRequestError,
        sortOrderPattern,
        sortClickHandler,
    ])

    return (
        <>
            <FiltersModalSlider />
            <SortModalSlider sortOrderPattern={sortOrderPattern} onClick={sortClickHandler} />
            <div className={styles.wrapper}>
                <Breadcrumbs breadcrumbsList={breadcrumbsList} />
                {content}
            </div>
        </>
    )
}

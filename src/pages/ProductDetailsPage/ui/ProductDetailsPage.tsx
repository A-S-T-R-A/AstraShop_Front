import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import {
    Breadcrumbs,
    CurrentTreeItemType,
    catalogNavigationActions,
} from "entities/CatalogNavigation"
import { BannersRow } from "widgets/Banner"
import { ProducstRowVariant, ProductsRow } from "widgets/ProductCarousel"
import { fetchProductDetails } from "../model/services/fetchProductDetails/fetchProductDetails"
import {
    getProductDetailsError,
    getProductDetailsName,
    getProductParents,
} from "../model/selectors/productDetailsSelectors"
import { ProductMenu } from "./ProductMenu/ProductMenu"

export function ProductDetailsPage() {
    const dispatch = useDispatch()
    const { id } = useParams()

    const productRequestError = useSelector(getProductDetailsError)

    const productName = useSelector(getProductDetailsName)

    const productParentsData = useSelector(getProductParents)

    useEffect(() => {
        if (!productRequestError) {
            dispatch(fetchProductDetails(id))
        }
    }, [dispatch, id, productRequestError])

    useEffect(() => {
        const parents =
            productParentsData?.map(parent => ({
                id: parent.id,
                name: parent.name,
                type:
                    parent.parent_category_id === null
                        ? CurrentTreeItemType.CATEGORY
                        : CurrentTreeItemType.SUB_CATEGORY,
            })) || []

        dispatch(
            catalogNavigationActions.setCurrentTree([
                ...parents,
                {
                    id: id !== undefined ? +id : 0,
                    name: productName || "Product",
                    type: CurrentTreeItemType.PRODUCT,
                },
            ])
        )
    }, [id, dispatch, productName, productParentsData])

    return (
        <div>
            <Breadcrumbs />
            <ProductMenu />
            <ProductsRow variant={ProducstRowVariant.TOP_PRODUCTS} />
            <BannersRow />
        </div>
    )
}

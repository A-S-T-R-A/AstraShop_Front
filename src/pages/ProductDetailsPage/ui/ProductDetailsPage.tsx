import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { ProductDetails } from "entities/Product"
import { useDispatch, useSelector } from "react-redux"
import {
    Breadcrumbs,
    CurrentTreeItemType,
    catalogNavigationActions,
} from "entities/CatalogNavigation"
import { BannersRow } from "widgets/BannersRow"
import { ProductCarousel, ProductCarouselVariant } from "widgets/ProductCarousel"
import { ToggleProductInBasket, ToggleProductInBasketVariant } from "features/basketFeatures"
import { fetchProductDetails } from "../model/services/fetchProductDetails/fetchProductDetails"
import {
    getProductDetailsAttributes,
    getProductDetailsDescription,
    getProductDetailsError,
    getProductDetailsId,
    getProductDetailsImages,
    getProductDetailsLoading,
    getProductDetailsName,
    getProductDetailsPrice,
    getProductParents,
} from "../model/selectors/productDetailsSelectors"

export function ProductDetailsPage() {
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        dispatch(fetchProductDetails(id))
    }, [dispatch, id])

    const productRequestLoading = useSelector(getProductDetailsLoading)
    const productRequestError = useSelector(getProductDetailsError)
    const productId = useSelector(getProductDetailsId)
    const productName = useSelector(getProductDetailsName)
    const productPrice = useSelector(getProductDetailsPrice)
    const productCurrency = "$" // to be changed
    const prodductIsNew = false // to be changed
    const productImages = useSelector(getProductDetailsImages)
    const productDesc = useSelector(getProductDetailsDescription)
    const productAttributes = useSelector(getProductDetailsAttributes)

    const productParentsData = useSelector(getProductParents)

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

    const product = {
        id: productId || 0,
        name: productName || "",
        images: productImages || [],
        price: productPrice || 0,
    }

    return (
        <div>
            <Breadcrumbs />
            <ProductDetails
                isLoading={productRequestLoading}
                error={productRequestError}
                is_new={prodductIsNew}
                id={productId || 0}
                name={productName || ""}
                price={productPrice || 0}
                currency={productCurrency}
                images={productImages || []}
                description={productDesc}
                attributes={productAttributes}
                Basket={
                    <ToggleProductInBasket
                        variant={ToggleProductInBasketVariant.BUTTON}
                        product={product}
                    />
                }
            />
            <ProductCarousel variant={ProductCarouselVariant.TOP_PRODUCTS} />
            <BannersRow />
        </div>
    )
}

import { StateSchema } from "app/providers/StoreProvider"

export const getProductDetailsLoading = (state: StateSchema) => state.productDetails.isLoading
export const getProductDetailsError = (state: StateSchema) => state.productDetails.error
export const getProductDetails = (state: StateSchema) => state.productDetails.data
export const getProductDetailsId = (state: StateSchema) => state.productDetails.data?.id
export const getProductDetailsName = (state: StateSchema) => state.productDetails.data?.name
export const getProductDetailsPrice = (state: StateSchema) => state.productDetails.data?.price
export const getProductDetailsImages = (state: StateSchema) => state.productDetails.data?.images
export const getProductDetailsDescription = (state: StateSchema) =>
    state.productDetails.data?.description
export const getProductDetailsAttributes = (state: StateSchema) =>
    state.productDetails.data?.attributes
export const getProductParents = (state: StateSchema) => state.productDetails.data?.parentCategories

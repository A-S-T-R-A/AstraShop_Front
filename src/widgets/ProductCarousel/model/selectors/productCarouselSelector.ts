import { StateSchema } from "app/providers/StoreProvider"

export const getProductCarouselLoadingTop = (state: StateSchema) =>
    state.productCarousel.isLoadingTop
export const getProductCarouselLoadingNew = (state: StateSchema) =>
    state.productCarousel.isLoadingNew
export const getProductCarouselTopProducts = (state: StateSchema) =>
    state.productCarousel.topProducts
export const getProductCarouselNewProducts = (state: StateSchema) =>
    state.productCarousel.newProducts

export const getProductCarouselErrorTop = (state: StateSchema) => state.productCarousel.errorTop
export const getProductCarouselErrorNew = (state: StateSchema) => state.productCarousel.errorNew

import { AxiosInstance } from "axios"
import { BasketSchema } from "entities/Basket"
import { CatalogNavigationSchema } from "entities/CatalogNavigation"
import { ModalsSchema } from "entities/ModalSlider"
import { ProductDetailsSchema } from "pages/ProductDetailsPage"
import { SubCategoryPageSchema } from "pages/SubCategoryPage"
import { ProductCarouselSchema } from "widgets/ProductCarousel"

export interface StateSchema {
    modals: ModalsSchema
    catalogNavigation: CatalogNavigationSchema
    subcategoryPage: SubCategoryPageSchema
    productDetails: ProductDetailsSchema
    productCarousel: ProductCarouselSchema
    basket: BasketSchema
}

interface ThunkExtraArg {
    api: AxiosInstance
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArg
    state: StateSchema
}

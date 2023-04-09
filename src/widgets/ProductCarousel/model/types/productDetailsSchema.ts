import { Product } from "entities/Product"

export interface ProductCarouselSchema {
    topProducts?: Product[]
    newProducts?: Product[]
    isLoadingTop: boolean
    isLoadingNew: boolean
    errorTop?: string
    errorNew?: string
}

import { Product } from "entities/Product"

export interface ProductDetailsSchema {
    data?: Product
    isLoading: boolean
    error?: string
}

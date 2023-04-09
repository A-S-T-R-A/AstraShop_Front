import { Product } from "entities/Product"

interface BasketProduct extends Product {
    quantity: number
}

export interface BasketSchema {
    products: BasketProduct[]
}

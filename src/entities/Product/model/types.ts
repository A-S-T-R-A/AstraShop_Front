export interface ProductAttributes {
    [key: string]: string | string[]
}

interface ProductParentCategory {
    id: number
    parent_category_id: number
    name: string
}

export interface Product {
    id: number
    name: string
    is_new?: boolean
    images: string[]
    price: number
    description?: string
    attributes?: ProductAttributes
    parent_category_id?: number
    parentCategories?: ProductParentCategory[]
}

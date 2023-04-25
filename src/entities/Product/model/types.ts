export interface ProductAttributeData {
    id: number
    name: string
}

export interface ProductAttribute {
    [key: string]: ProductAttributeData[]
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
    attributes?: ProductAttribute[]
    parent_category_id?: number
    parentCategories?: ProductParentCategory[]
}

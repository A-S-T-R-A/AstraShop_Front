export interface navigationSubcategory {
    name: string
    id: number
    parent_category_id: number
}

export interface navigationCategory {
    name: string
    id: number
    categories: navigationSubcategory[]
}

export type navigationTreeType = navigationCategory[]

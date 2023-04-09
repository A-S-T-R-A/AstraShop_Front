import { navigationTreeType } from "./list"

export enum CurrentTreeItemType {
    CATALOG = "catalog",
    CATEGORY = "category",
    SUB_CATEGORY = "sub_category",
    PRODUCT = "product",
}

export interface CurrentTreeItem {
    id: number
    name: string
    type: CurrentTreeItemType
}

export interface CatalogNavigationSchema {
    tree: navigationTreeType | []
    currentTree: CurrentTreeItem[] | []
    isLoading: boolean
    error?: string
}

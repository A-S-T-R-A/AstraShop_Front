export enum ModalsList {
    BURGER = "burger",
    BASKET = "basket",
    FILTERS = "filters",
    SORT = "sort",
    SUCCESS = "success",
    NONE = "",
}

export interface ModalsSchema {
    current: ModalsList
}

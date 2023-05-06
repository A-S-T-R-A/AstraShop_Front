export { FilterProducts } from "./ui/FilterProducts"

export { filterProductsReducer } from "./model/slice/filterProductsSlice"
export { fetchCategoryFilters } from "./model/services/fetchCategoryFilters/fetchCategoryFilters"
export {
    getProductFiltersPriceRange,
    getProductFiltersAttributes,
} from "./model/selectors/filterProductsSelectors"

export { filterProductsActions } from "./model/slice/filterProductsSlice"

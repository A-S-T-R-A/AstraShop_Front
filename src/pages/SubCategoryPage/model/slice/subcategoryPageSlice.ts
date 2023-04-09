import { createSlice } from "@reduxjs/toolkit"
import { sortProductsOrderType } from "features/SortProducts"
import { fetchCategoryProducts } from "../services/fetchCategoryProducts/fetchCategoryProducts"
import { SubCategoryPageSchema } from "../types/subcategoryPageSchema"

const initialState: SubCategoryPageSchema = {
    products: [],
    isLoading: false,
    error: undefined,
    sortOrder: sortProductsOrderType.NONE,
    parent_category_id: 0,
    id: 0,
    name: "",
}

const subcategoryPageSlice = createSlice({
    name: "subcategoryPage",
    initialState,
    reducers: {
        setSortOrder: (state, action) => {
            state.sortOrder = action.payload
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchCategoryProducts.pending, (state, action) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchCategoryProducts.fulfilled, (state, action) => {
                state.isLoading = false
                state.products = action.payload.products
                state.id = action.payload.id
                state.parent_category_id = action.payload.parent_category_id
                state.name = action.payload.name
            })
            .addCase(fetchCategoryProducts.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const { reducer: subcategoryPageReducer, actions: subcategoryPageActions } =
    subcategoryPageSlice

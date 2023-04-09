import { createSlice } from "@reduxjs/toolkit"
import { fetchNewProducts } from "../services/fetchNewProducts/fetchNewProducts"
import { fetchTopProducts } from "../services/fetchTopProducts/fetchTopProducts"
import { ProductCarouselSchema } from "../types/productDetailsSchema"

const initialState: ProductCarouselSchema = {
    topProducts: undefined,
    newProducts: undefined,
    isLoadingTop: false,
    isLoadingNew: false,
    errorTop: undefined,
    errorNew: undefined,
}

const productCarouselSlice = createSlice({
    name: "productCarouselSlice",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchTopProducts.pending, (state, action) => {
                state.errorTop = undefined
                state.isLoadingTop = true
            })
            .addCase(fetchTopProducts.fulfilled, (state, action) => {
                state.isLoadingTop = false
                state.topProducts = action.payload
            })
            .addCase(fetchTopProducts.rejected, (state, action) => {
                state.isLoadingTop = false
                state.errorTop = action.payload
            })
            .addCase(fetchNewProducts.pending, (state, action) => {
                state.errorNew = undefined
                state.isLoadingNew = true
            })
            .addCase(fetchNewProducts.fulfilled, (state, action) => {
                state.isLoadingNew = false
                state.newProducts = action.payload
            })
            .addCase(fetchNewProducts.rejected, (state, action) => {
                state.isLoadingNew = false
                state.errorNew = action.payload
            })
    },
})

export const { reducer: productCarouselReducer, actions: productCarouselActions } =
    productCarouselSlice

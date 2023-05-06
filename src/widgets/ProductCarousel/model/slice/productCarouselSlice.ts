import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Product } from "entities/Product"
import { fetchNewProducts } from "../services/fetchNewProducts/fetchNewProducts"
import { fetchTopProducts } from "../services/fetchTopProducts/fetchTopProducts"
import { ProductCarouselSchema } from "../types/productDetailsSchema"
import { plugProductsData } from "../../const/plug"

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
            .addCase(fetchTopProducts.pending, state => {
                state.errorTop = undefined
                state.isLoadingTop = true
            })
            .addCase(fetchTopProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
                state.isLoadingTop = false
                state.topProducts = action.payload
            })
            .addCase(
                fetchTopProducts.rejected,
                (state, action: PayloadAction<string | undefined>) => {
                    state.isLoadingTop = false
                    state.errorTop = action.payload
                }
            )
            .addCase(fetchNewProducts.pending, state => {
                state.errorNew = undefined
                state.isLoadingNew = true
            })
            .addCase(fetchNewProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
                state.isLoadingNew = false
                state.newProducts = action.payload
            })
            .addCase(
                fetchNewProducts.rejected,
                (state, action: PayloadAction<string | undefined>) => {
                    state.isLoadingNew = false
                    state.errorNew = action.payload
                }
            )
    },
})

export const { reducer: productCarouselReducer, actions: productCarouselActions } =
    productCarouselSlice

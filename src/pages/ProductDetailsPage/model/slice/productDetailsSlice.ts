import { createSlice } from "@reduxjs/toolkit"
import { fetchProductDetails } from "../services/fetchProductDetails/fetchProductDetails"
import { ProductDetailsSchema } from "../types/productDetailsSchema"

const initialState: ProductDetailsSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
}

const productDetailsSlice = createSlice({
    name: "productDetailsSlice",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchProductDetails.pending, state => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchProductDetails.fulfilled, (state, action) => {
                state.isLoading = false
                state.data = action.payload
            })
            .addCase(fetchProductDetails.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const { reducer: productDetailsReducer, actions: productDetailsActions } =
    productDetailsSlice

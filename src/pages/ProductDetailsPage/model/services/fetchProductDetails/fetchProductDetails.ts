import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider"
import { Product } from "entities/Product"

export const fetchProductDetails = createAsyncThunk<
    Product,
    string | undefined,
    ThunkConfig<string>
>("productDetails/fetchProductDetails", async (id, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi

    try {
        const response = await extra.api.get(`product/${id}`)

        if (!response.data) {
            throw new Error()
        }

        return response.data
    } catch (error: any) {
        if (error.response?.status === 404) {
            return rejectWithValue("Product not found")
        }

        return rejectWithValue("unexpected error")
    }
})

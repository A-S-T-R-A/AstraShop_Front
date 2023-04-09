import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider"
import { Product } from "entities/Product"

export const fetchNewProducts = createAsyncThunk<Product[], void, ThunkConfig<string>>(
    "productCarousel/fetchNewProducts",
    async (id, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi

        try {
            const response = await extra.api.get("product/new")

            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (error) {
            return rejectWithValue("error")
        }
    }
)

import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider"
import { SubCategoryPageSchema } from "../../types/subcategoryPageSchema"

export const fetchCategoryProducts = createAsyncThunk<
    SubCategoryPageSchema,
    string | undefined,
    ThunkConfig<string>
>("subcategoryPage/fetchCategoryProducts", async (id, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi

    try {
        const response = await extra.api.get(`category/${id}/products`)

        if (!response.data) {
            throw new Error()
        }

        return response.data
    } catch (error: any) {
        if (error.response?.status === 404) {
            return rejectWithValue("Category not found")
        }

        return rejectWithValue("unexpected error")
    }
})

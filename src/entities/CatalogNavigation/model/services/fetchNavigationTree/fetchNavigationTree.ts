import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider"
import { navigationTreeType } from "../../types/list"

export const fetchNavigationTree = createAsyncThunk<navigationTreeType, void, ThunkConfig<string>>(
    "catalogNavigation/fetchNavigationTree",
    async (props, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi

        try {
            const response = await extra.api.get("/category/tree")

            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (error) {
            return rejectWithValue("error")
        }
    }
)

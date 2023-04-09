import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { fetchNavigationTree } from "../services/fetchNavigationTree/fetchNavigationTree"
import { CatalogNavigationSchema, CurrentTreeItem } from "../types/catalogNavigationSchema"

const initialState: CatalogNavigationSchema = {
    tree: [],
    currentTree: [],
    isLoading: false,
    error: undefined,
}

const catalogNavigationSlice = createSlice({
    name: "catalogNavigation",
    initialState,
    reducers: {
        setCurrentTree: (state, action: PayloadAction<CurrentTreeItem[]>) => {
            state.currentTree = action.payload
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchNavigationTree.pending, (state, action) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchNavigationTree.fulfilled, (state, action) => {
                state.isLoading = false
                state.tree = action.payload
            })
            .addCase(fetchNavigationTree.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const { reducer: catalogNavigationReducer, actions: catalogNavigationActions } =
    catalogNavigationSlice

import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { fetchCategoryFilters } from "../services/fetchCategoryFilters/fetchCategoryFilters"
import { FilterProductsSchema } from "../types/filterProductsSchema"
import { IPriceRange, filtersDataType } from "../types/types"

const initialState: FilterProductsSchema = {
    filters: [],
    attributes: [],
    isLoading: false,
}

const filterProductsSlice = createSlice({
    name: "filterProductsSlice",
    initialState,
    reducers: {
        toggleFilterAttribute: (state, action: PayloadAction<number>) => {
            const arr = state.attributes.filter(item => item === action.payload)

            if (arr.length) {
                state.attributes = state.attributes.filter(item => item !== action.payload)
            } else {
                state.attributes = [...state.attributes, action.payload]
            }
        },
        setFilterAttributes: (state, action: PayloadAction<number[]>) => {
            state.attributes = action.payload
        },
        setPriceRange: (state, action: PayloadAction<IPriceRange>) => {
            state.priceRange = action.payload
        },
        resetPriceRange: state => {
            state.priceRange = undefined
        },
        resetFilters: state => {
            state.filters = []
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchCategoryFilters.pending, state => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(
                fetchCategoryFilters.fulfilled,
                (state, action: PayloadAction<filtersDataType>) => {
                    state.isLoading = false
                    state.filters = action.payload
                }
            )
            .addCase(
                fetchCategoryFilters.rejected,
                (state, action: PayloadAction<string | undefined>) => {
                    state.isLoading = false
                    state.error = action.payload
                }
            )
    },
})

export const { reducer: filterProductsReducer, actions: filterProductsActions } =
    filterProductsSlice

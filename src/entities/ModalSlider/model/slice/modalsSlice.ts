import { createSlice } from "@reduxjs/toolkit"
import { ModalsList, ModalsSchema } from "../types/modalsSchema"

const initialState: ModalsSchema = {
    current: ModalsList.NONE,
}

export const modalsSlice = createSlice({
    name: "modals",
    initialState,
    reducers: {
        close: state => {
            state.current = ModalsList.NONE
        },
        openBurger: state => {
            state.current = ModalsList.BURGER
        },
        openBasket: state => {
            state.current = ModalsList.BASKET
        },
        openFilters: state => {
            state.current = ModalsList.FILTERS
        },
        openSort: state => {
            state.current = ModalsList.SORT
        },
        openSuccess: state => {
            state.current = ModalsList.SUCCESS
        },
    },
})

export const { actions: modalsActions } = modalsSlice
export const { reducer: modalsReducer } = modalsSlice

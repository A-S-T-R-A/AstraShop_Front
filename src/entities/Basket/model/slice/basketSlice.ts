import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { BASKET_LOCALSTORAGE_PRODUCTS } from "shared/const/localstorage"
import { Product } from "entities/Product"
import { BasketSchema } from "../types/basketSchema"

const initialState: BasketSchema = {
    products: [],
}

const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        initBasketData: state => {
            const products = localStorage.getItem(BASKET_LOCALSTORAGE_PRODUCTS) || ""
            if (products) {
                state.products = JSON.parse(products) || []
            }
        },
        addToBasket: (state, { payload }: PayloadAction<Product>) => {
            state.products.push({ ...payload, quantity: 1 })
            localStorage.setItem(BASKET_LOCALSTORAGE_PRODUCTS, JSON.stringify(state.products))
        },
        removeFromBasket: (state, { payload }: PayloadAction<number>) => {
            state.products = state.products?.filter(product => product.id !== payload)
            localStorage.setItem(BASKET_LOCALSTORAGE_PRODUCTS, JSON.stringify(state.products))
        },
        clearBasket: state => {
            state.products = []
            localStorage.setItem(BASKET_LOCALSTORAGE_PRODUCTS, JSON.stringify(state.products))
        },
        incrementInBasket: (state, { payload }: PayloadAction<number>) => {
            state.products = state.products.map(product => {
                if (product.id === payload) {
                    return {
                        ...product,
                        quantity: product.quantity ? product.quantity + 1 : 1,
                    }
                }
                return product
            })
            localStorage.setItem(BASKET_LOCALSTORAGE_PRODUCTS, JSON.stringify(state.products))
        },
        decrementInBasket: (state, { payload }: PayloadAction<number>) => {
            state.products = state.products.map(product => {
                if (product.id === payload) {
                    return {
                        ...product,
                        quantity:
                            product.quantity && product.quantity > 1 ? product.quantity - 1 : 1,
                    }
                }
                return product
            })
            localStorage.setItem(BASKET_LOCALSTORAGE_PRODUCTS, JSON.stringify(state.products))
        },
        setQuantityInBasket: (
            state,
            { payload }: PayloadAction<{ id: number; quantity: number }>
        ) => {
            const { id, quantity } = payload

            state.products = state.products.map(product => {
                if (product.id === id) {
                    return {
                        ...product,
                        quantity,
                    }
                }
                return product
            })
            localStorage.setItem(BASKET_LOCALSTORAGE_PRODUCTS, JSON.stringify(state.products))
        },
    },
})

export const { reducer: basketReducer, actions: basketActions } = basketSlice

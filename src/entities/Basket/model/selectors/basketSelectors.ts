import { StateSchema } from "app/providers/StoreProvider"

export const getBasketProducts = (state: StateSchema) => state.basket.products
export const getBasketProductQuantityById = (id: number) => (state: StateSchema) =>
    state.basket.products.filter(item => item.id === id)[0].quantity

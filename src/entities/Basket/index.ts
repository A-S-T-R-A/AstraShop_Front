export { SmallBasket, SmallBasketColor } from "./ui/SmallBasket/SmallBasket"
export { BasketSummary } from "./ui/BasketSummary/BasketSummary"

export { BasketSummaryVariant } from "./ui/BasketSummary/BasketSummary"
export { basketReducer } from "./model/slice/basketSlice"
export type { BasketSchema } from "./model/types/basketSchema"
export { basketActions } from "./model/slice/basketSlice"
export {
    getBasketProducts,
    getBasketProductsTotalPrice,
    getBasketProductsTotalQuantity,
} from "./model/selectors/basketSelectors"

export { getBasketProductQuantityById } from "./model/selectors/basketSelectors"

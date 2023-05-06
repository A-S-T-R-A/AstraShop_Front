import { modalsActions } from "entities/ModalSlider"
import { SubmitOrder } from "features/SubmitOrder"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSearchParams } from "react-router-dom"
import { BannersRow } from "widgets/Banner"
import { ProducstRowVariant, ProductsRow } from "widgets/ProductCarousel"
import { basketActions } from "entities/Basket"
import { SuccessOrderModal } from "./SuccessOrderModal/SuccessOrderModal"
import { PaymentErrorModal } from "./PaymentErrorModal/PaymentErrorModal"

export function OrderPage() {
    const [searchParams] = useSearchParams()

    const dispatch = useDispatch()

    useEffect(() => {
        const payment = searchParams.get("payment")

        if (payment === "success") {
            dispatch(modalsActions.openSuccess())
            dispatch(basketActions.clearBasket())
        } else if (payment === "failure") {
            dispatch(modalsActions.openPaymentError())
        }
    }, [searchParams, dispatch])

    return (
        <>
            <SuccessOrderModal />
            <PaymentErrorModal />
            <div>
                <SubmitOrder />
                <ProductsRow variant={ProducstRowVariant.TOP_PRODUCTS} />

                <BannersRow />
                <ProductsRow variant={ProducstRowVariant.NEW_PRODUCTS} />
            </div>
        </>
    )
}

import { useSelector } from "react-redux"
import { ShowMoreContainer } from "shared/components/ShowMoreContainer"
import {
    getProductDetailsAttributes,
    getProductDetailsDescription,
} from "../../../model/selectors/productDetailsSelectors"
import { ProductInfo } from "./ProductInfo/ProductInfo"

export function ProductDescription() {
    const productDesc = useSelector(getProductDetailsDescription)
    const productAttributes = useSelector(getProductDetailsAttributes)

    return (
        <ShowMoreContainer buttonText={["Show More", "Hide"]}>
            <ProductInfo description={productDesc} attributes={productAttributes} />
        </ShowMoreContainer>
    )
}

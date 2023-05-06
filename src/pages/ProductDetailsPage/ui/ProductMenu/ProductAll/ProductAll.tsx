import { Layout, LayoutIsland } from "../Layout/Layout"
import { ProductDescription } from "./ProductDescription/ProductDescription"
import { ProductGallery } from "./ProductGallery/ProductGallery"
import { ProductPriceInfo } from "./ProductPriceInfo/ProductPriceInfo"

export function ProductAll() {
    return (
        <Layout>
            <LayoutIsland column="left">
                <ProductGallery />
            </LayoutIsland>

            <LayoutIsland column="right">
                <ProductPriceInfo />
            </LayoutIsland>

            <LayoutIsland column="right">
                <ProductDescription />
            </LayoutIsland>
        </Layout>
    )
}

import { Layout, LayoutIsland } from "../Layout/Layout"
import { ProductGallery } from "./ProductGallery/ProductGallery"
import { productInfoIsland as ProductInfoIsland } from "./ProductInfoIsland/ProductInfoIsland"

export function ProductAll() {
    return (
        <Layout>
            <LayoutIsland column="left">
                <ProductGallery />
            </LayoutIsland>

            <LayoutIsland column="right" height="200px">
                <ProductInfoIsland />
            </LayoutIsland>

            <LayoutIsland column="left" height="50px">
                Info
            </LayoutIsland>

            <LayoutIsland column="right" height="200px">
                Filters
            </LayoutIsland>

            <LayoutIsland column="left" height="200px">
                Extra
            </LayoutIsland>
        </Layout>
    )
}

import {
    BannerWithProductsRow,
    ProductsRow,
    ProducstRowVariant,
    ProductsSale,
} from "widgets/ProductCarousel"
import { BannersRow, BannerSlider, SingleBanner } from "widgets/Banner"
import { CatalogSidebarNav } from "entities/CatalogNavigation"
import { Layout, Row } from "./Layout"

export function MainPage() {
    return (
        <div>
            <Layout gap="40px">
                <Row
                    schema={{
                        0: [0, 1, 0],
                        960: [2, 5, 0],
                        1200: [2, 5, 2],
                        1600: [1, 3, 1],
                    }}
                    gap="10px"
                    height="480px"
                >
                    <CatalogSidebarNav />
                    <BannerSlider />
                    <ProductsSale />
                </Row>

                <Row
                    schema={{
                        0: [1],
                        1200: [0],
                    }}
                    gap="10px"
                >
                    <ProductsSale />
                </Row>

                <Row>
                    <BannerWithProductsRow id={1} />
                </Row>

                <Row>
                    <SingleBanner imgIndex={1} />
                </Row>

                <Row>
                    <ProductsRow variant={ProducstRowVariant.TOP_PRODUCTS} />
                </Row>

                <Row>
                    <BannersRow />
                </Row>
            </Layout>
        </div>
    )
}

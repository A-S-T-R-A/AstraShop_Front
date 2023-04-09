import { ProductCarousel, ProductCarouselVariant } from "widgets/ProductCarousel"
import { ComponentMeta, ComponentStory } from "@storybook/react"

export default {
    title: "widgest/ProductCarousel",
    component: ProductCarousel,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof ProductCarousel>

const Template: ComponentStory<typeof ProductCarousel> = (args: any) => <ProductCarousel {...args} />

export const ProductCarouselView = Template.bind({})
ProductCarouselView.args = {
    variant: ProductCarouselVariant.TOP_PRODUCTS,
}

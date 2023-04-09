/* import { ProductCard } from "entities/ProductCard"
import { ComponentMeta, ComponentStory } from "@storybook/react"

import { ProductCardList } from "pages/SubCategoryPage/model/list"
import styles from "./ProductCard.module.scss"

export default {
    title: "entities/ProductCard",
    component: ProductCard,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof ProductCard>

const Template: ComponentStory<typeof ProductCard> = (args: any) => <ProductCard {...args} />

export const ProductCardView = Template.bind({})
ProductCardView.args = {
    ...ProductCardList[0],
    className: styles.width280,
}

export const ProductCardNewView = Template.bind({})
ProductCardNewView.args = {
    ...ProductCardList[0],
    className: styles.width280,
    isNew: true,
}
 */

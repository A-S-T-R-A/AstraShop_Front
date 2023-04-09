import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Label, LabelFontSize, LabelColor } from "./Label"

export default {
    title: "shared/Label",
    component: Label,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Label>

const Template: ComponentStory<typeof Label> = (args: any) => <Label {...args} />

export const DefaultOnlyValue = Template.bind({})
DefaultOnlyValue.args = {
    value: "новый",
}

export const LabelFontSizeSmallRedGray = Template.bind({})
LabelFontSizeSmallRedGray.args = {
    value: "новый",
    color: LabelColor.GRAY,
}

export const LabelFontSizeNormalRed = Template.bind({})
LabelFontSizeNormalRed.args = {
    value: "0",
    fontSize: LabelFontSize.FONT_NORMAL,
    color: LabelColor.RED,
}

export const LabelFontSizeNormalGray = Template.bind({})
LabelFontSizeNormalGray.args = {
    value: "0",
    fontSize: LabelFontSize.FONT_NORMAL,
    color: LabelColor.GRAY,
}

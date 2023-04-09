import { ComponentMeta, ComponentStory } from "@storybook/react"
import { RadioButton } from "shared/ui/RadioGroup/ui/RadioButton/RadioButton"
import { v4 as uuid } from "uuid"

const id = uuid()

export default {
    title: "shared/RadioButton",
    component: RadioButton,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof RadioButton>

const Template: ComponentStory<typeof RadioButton> = (args: any) => <RadioButton {...args} />

export const UncheckedWithoutLabel = Template.bind({})
UncheckedWithoutLabel.args = {
    value: "test",
    checked: false,
    id,
}

export const UncheckedWithLabel = Template.bind({})
UncheckedWithLabel.args = {
    value: "test",
    checked: false,
    label: "Test label",
    id,
}

export const CheckedWithoutLabel = Template.bind({})
CheckedWithoutLabel.args = {
    value: "test",
    checked: true,
    id,
}

export const CheckedWithLabel = Template.bind({})
CheckedWithLabel.args = {
    value: "test",
    checked: true,
    label: "Test label",
    id,
}

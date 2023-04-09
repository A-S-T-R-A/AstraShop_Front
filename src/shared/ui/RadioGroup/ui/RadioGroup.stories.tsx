import { RadioGroup } from "shared/ui/RadioGroup"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { deliveryOptions as options } from "features/SubmitOrder/model/lists"

export default {
    title: "shared/RadioGroup",
    component: RadioGroup,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof RadioGroup>

const Template: ComponentStory<typeof RadioGroup> = (args: any) => <RadioGroup {...args} />

export const RadiogroupWithTitle = Template.bind({})
RadiogroupWithTitle.args = {
    title: "Тип доставки",
    isRequired: true,
    options,
    activeInput: options[0].value,
    onChange: v => console.log(v),
}

import { ComponentMeta, ComponentStory } from "@storybook/react"
import { DarkBgDecorator } from "shared/config/storybook/DarkBgDecorator/DarkBgDecorator"
import { Typography, TypographyVariant, TypographyColor } from "./Typography"

export default {
    title: "shared/Typography",
    component: Typography,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Typography>

const Template: ComponentStory<typeof Typography> = args => <Typography {...args} />

export const H1ColorBase = Template.bind({})
H1ColorBase.args = {
    children: "Title lorem ipsun",
    variant: TypographyVariant.H1,
}

export const H2ColorBase = Template.bind({})
H2ColorBase.args = {
    children: "Title lorem ipsun",
    variant: TypographyVariant.H2,
}

export const H3ColorBase = Template.bind({})
H3ColorBase.args = {
    children: "Title lorem ipsun",
    variant: TypographyVariant.H3,
}

export const H4ColorBase = Template.bind({})
H4ColorBase.args = {
    children: "Title lorem ipsun",
    variant: TypographyVariant.H4,
}

export const PColorBase = Template.bind({})
PColorBase.args = {
    children: "Paragraph lorem ipsun",
    variant: TypographyVariant.P,
}

/* H1 type */

export const H1ColorDarkGrey = Template.bind({})
H1ColorDarkGrey.args = {
    children: "Title lorem ipsun",
    variant: TypographyVariant.H1,
    color: TypographyColor.DARK_GRAY,
}

export const H1ColorAccent = Template.bind({})
H1ColorAccent.args = {
    children: "Title lorem ipsun",
    variant: TypographyVariant.H1,
    color: TypographyColor.ACCENT,
}

export const H1ColorInverted = Template.bind({})
H1ColorInverted.args = {
    children: "Title lorem ipsun",
    variant: TypographyVariant.H1,
    color: TypographyColor.INVERTED,
}
H1ColorInverted.decorators = [DarkBgDecorator()]

/* H1 bold type */

export const H1ColorBaseBold = Template.bind({})
H1ColorBaseBold.args = {
    children: "Title lorem ipsun",
    variant: TypographyVariant.H1,
    isBold: true,
}

export const H1ColorDarkGreyBold = Template.bind({})
H1ColorDarkGreyBold.args = {
    children: "Title lorem ipsun",
    variant: TypographyVariant.H1,
    color: TypographyColor.DARK_GRAY,
    isBold: true,
}

export const H1ColorAccentBold = Template.bind({})
H1ColorAccentBold.args = {
    children: "Title lorem ipsun",
    variant: TypographyVariant.H1,
    color: TypographyColor.ACCENT,
    isBold: true,
}

export const H1ColorInvertedBold = Template.bind({})
H1ColorInvertedBold.args = {
    children: "Title lorem ipsun",
    variant: TypographyVariant.H1,
    color: TypographyColor.INVERTED,
    isBold: true,
}
H1ColorInvertedBold.decorators = [DarkBgDecorator()]

/* H2 type */

export const H2ColorDarkGrey = Template.bind({})
H2ColorDarkGrey.args = {
    children: "Title lorem ipsun",
    variant: TypographyVariant.H2,
    color: TypographyColor.DARK_GRAY,
}

export const H2ColorAccent = Template.bind({})
H2ColorAccent.args = {
    children: "Title lorem ipsun",
    variant: TypographyVariant.H2,
    color: TypographyColor.ACCENT,
}

export const H2ColorInverted = Template.bind({})
H2ColorInverted.args = {
    children: "Title lorem ipsun",
    variant: TypographyVariant.H2,
    color: TypographyColor.INVERTED,
}
H2ColorInverted.decorators = [DarkBgDecorator()]

/* H2 bold type */
export const H2ColorBaseBold = Template.bind({})
H2ColorBaseBold.args = {
    children: "Title lorem ipsun",
    variant: TypographyVariant.H2,
    isBold: true,
}

export const H2ColorDarkGreyBold = Template.bind({})
H2ColorDarkGreyBold.args = {
    children: "Title lorem ipsun",
    variant: TypographyVariant.H2,
    color: TypographyColor.DARK_GRAY,
    isBold: true,
}

export const H2ColorAccentBold = Template.bind({})
H2ColorAccentBold.args = {
    children: "Title lorem ipsun",
    variant: TypographyVariant.H2,
    color: TypographyColor.ACCENT,
    isBold: true,
}

export const H2ColorInvertedBold = Template.bind({})
H2ColorInvertedBold.args = {
    children: "Title lorem ipsun",
    variant: TypographyVariant.H2,
    color: TypographyColor.INVERTED,
    isBold: true,
}
H2ColorInvertedBold.decorators = [DarkBgDecorator()]

/* H3 type */

export const H3ColorDarkGrey = Template.bind({})
H3ColorDarkGrey.args = {
    children: "Title lorem ipsun",
    variant: TypographyVariant.H3,
    color: TypographyColor.DARK_GRAY,
}

export const H3ColorAccent = Template.bind({})
H3ColorAccent.args = {
    children: "Title lorem ipsun",
    variant: TypographyVariant.H3,
    color: TypographyColor.ACCENT,
}

export const H3ColorInverted = Template.bind({})
H3ColorInverted.args = {
    children: "Title lorem ipsun",
    variant: TypographyVariant.H3,
    color: TypographyColor.INVERTED,
}
H3ColorInverted.decorators = [DarkBgDecorator()]

/* H3 bold type */

export const H3ColorBaseBold = Template.bind({})
H3ColorBaseBold.args = {
    children: "Title lorem ipsun",
    variant: TypographyVariant.H3,
    isBold: true,
}

export const H3ColorDarkGreyBold = Template.bind({})
H3ColorDarkGreyBold.args = {
    children: "Title lorem ipsun",
    variant: TypographyVariant.H3,
    color: TypographyColor.DARK_GRAY,
    isBold: true,
}

export const H3ColorAccentBold = Template.bind({})
H3ColorAccentBold.args = {
    children: "Title lorem ipsun",
    variant: TypographyVariant.H3,
    color: TypographyColor.ACCENT,
    isBold: true,
}

export const H3ColorInvertedBold = Template.bind({})
H3ColorInvertedBold.args = {
    children: "Title lorem ipsun",
    variant: TypographyVariant.H3,
    color: TypographyColor.INVERTED,
    isBold: true,
}
H3ColorInvertedBold.decorators = [DarkBgDecorator()]

/* H4 type */

export const H4ColorDarkGrey = Template.bind({})
H4ColorDarkGrey.args = {
    children: "Title lorem ipsun",
    variant: TypographyVariant.H4,
    color: TypographyColor.DARK_GRAY,
}

export const H4ColorAccent = Template.bind({})
H4ColorAccent.args = {
    children: "Title lorem ipsun",
    variant: TypographyVariant.H4,
    color: TypographyColor.ACCENT,
}

export const H4ColorInverted = Template.bind({})
H4ColorInverted.args = {
    children: "Title lorem ipsun",
    variant: TypographyVariant.H4,
    color: TypographyColor.INVERTED,
}
H4ColorInverted.decorators = [DarkBgDecorator()]

/* H4 bold type */

export const H4ColorBaseBold = Template.bind({})
H4ColorBaseBold.args = {
    children: "Title lorem ipsun",
    variant: TypographyVariant.H4,
    isBold: true,
}

export const H4ColorDarkGreyBold = Template.bind({})
H4ColorDarkGreyBold.args = {
    children: "Title lorem ipsun",
    variant: TypographyVariant.H4,
    color: TypographyColor.DARK_GRAY,
    isBold: true,
}

export const H4ColorAccentBold = Template.bind({})
H4ColorAccentBold.args = {
    children: "Title lorem ipsun",
    variant: TypographyVariant.H4,
    color: TypographyColor.ACCENT,
    isBold: true,
}

export const H4ColorInvertedBold = Template.bind({})
H4ColorInvertedBold.args = {
    children: "Title lorem ipsun",
    variant: TypographyVariant.H4,
    color: TypographyColor.INVERTED,
    isBold: true,
}
H4ColorInvertedBold.decorators = [DarkBgDecorator()]

/* P type */

export const PColorDarkGrey = Template.bind({})
PColorDarkGrey.args = {
    children: "Title lorem ipsun",
    variant: TypographyVariant.P,
    color: TypographyColor.DARK_GRAY,
}

export const PColorAccent = Template.bind({})
PColorAccent.args = {
    children: "Title lorem ipsun",
    variant: TypographyVariant.P,
    color: TypographyColor.ACCENT,
}

export const PColorInverted = Template.bind({})
PColorInverted.args = {
    children: "Title lorem ipsun",
    variant: TypographyVariant.P,
    color: TypographyColor.INVERTED,
}
PColorInverted.decorators = [DarkBgDecorator()]

/* P bold type */

export const PColorBaseBold = Template.bind({})
PColorBaseBold.args = {
    children: "Title lorem ipsun",
    variant: TypographyVariant.P,
    isBold: true,
}

export const PColorDarkGreyBold = Template.bind({})
PColorDarkGreyBold.args = {
    children: "Title lorem ipsun",
    variant: TypographyVariant.P,
    color: TypographyColor.DARK_GRAY,
    isBold: true,
}

export const PColorAccentBold = Template.bind({})
PColorAccentBold.args = {
    children: "Title lorem ipsun",
    variant: TypographyVariant.P,
    color: TypographyColor.ACCENT,
    isBold: true,
}

export const PColorInvertedBold = Template.bind({})
PColorInvertedBold.args = {
    children: "Title lorem ipsun",
    variant: TypographyVariant.P,
    color: TypographyColor.INVERTED,
    isBold: true,
}
PColorInvertedBold.decorators = [DarkBgDecorator()]

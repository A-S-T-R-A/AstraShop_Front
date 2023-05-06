import { ComponentMeta, ComponentStory } from "@storybook/react"
import { AsyncImage, ImageFit } from "./AsyncImage"

const src = "https://developed-by.me:4000/uploads/images-1682078415893.png"

export default {
    title: "shared/AsyncImage",
    component: AsyncImage,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof AsyncImage>

const Template: ComponentStory<typeof AsyncImage> = args => (
    <div style={{ width: "30%", height: "30%" }}>
        <AsyncImage {...args} />
    </div>
)

export const AsyncImageContain = Template.bind({})
AsyncImageContain.args = {
    src,
}

export const AsyncImageCover = Template.bind({})
AsyncImageCover.args = {
    src,
    objectFit: ImageFit.COVER,
}

export const AsyncImageFill = Template.bind({})
AsyncImageFill.args = {
    src,
    objectFit: ImageFit.FILL,
}

export const AsyncImageNone = Template.bind({})
AsyncImageNone.args = {
    src,
    objectFit: ImageFit.NONE,
}

export const AsyncImageScaleDown = Template.bind({})
AsyncImageScaleDown.args = {
    src,
    objectFit: ImageFit.SCALE_DOWN,
}

export const AsyncImageUndefinedSrc = Template.bind({})
AsyncImageUndefinedSrc.args = {
    src: undefined,
}

export const AsyncImageEmpty = Template.bind({})
AsyncImageEmpty.args = {}

import { Story } from "@storybook/react"

export function DarkBgDecorator() {
    return function (StoryComponent: Story) {
        return (
            <div style={{ backgroundColor: "black" }}>
                <StoryComponent />
            </div>
        )
    }
}

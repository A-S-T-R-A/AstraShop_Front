import { render, screen } from "@testing-library/react"
import { Label, LabelColor, LabelFontSize } from "./Label"

describe("Label", () => {
    test("Label render default style", () => {
        render(<Label value="Test render" />)
        const label = screen.getByTestId("label")

        expect(label).toBeInTheDocument()
        expect(label).toHaveClass("red")
        expect(label).toHaveClass("fontSmall")
        expect(label).not.toHaveClass("gray")
        expect(label).not.toHaveClass("fontNormal")
        screen.debug()
    })

    test("Label with normalFont class", () => {
        render(<Label value="Test" fontSize={LabelFontSize.FONT_NORMAL} />)
        const label = screen.getByTestId("label")

        expect(label).toHaveClass("fontNormal")
    })

    test("Label with gray class", () => {
        render(<Label value="Test" color={LabelColor.GRAY} />)
        const label = screen.getByTestId("label")

        expect(label).toHaveClass("gray")
    })

    test("Label with gray class and normalFont classes", () => {
        render(<Label value="Test" color={LabelColor.GRAY} fontSize={LabelFontSize.FONT_NORMAL} />)
        const label = screen.getByTestId("label")

        expect(label).toHaveClass("gray")
        expect(label).toHaveClass("fontNormal")
    })
})

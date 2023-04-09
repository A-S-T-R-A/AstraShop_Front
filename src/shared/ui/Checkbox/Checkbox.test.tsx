import { useState } from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Checkbox } from "./Checkbox"

describe("Checkbox", () => {
    function CheckboxTest() {
        const [checked, setChecked] = useState(false)
        const handleChange = () => setChecked(prev => !prev)

        return (
            <Checkbox
                label="Test checkbox"
                checked={checked}
                id="test"
                onChange={handleChange}
                className="test"
            />
        )
    }

    test("Checkbox render", () => {
        render(<CheckboxTest />)
        const input = screen.getByTestId("checkbox")

        expect(input).toBeInTheDocument()
        expect(screen.getByLabelText("Test checkbox")).toBeInTheDocument()
        expect(input).not.toBeChecked()
        expect(input).not.toHaveClass("checked")
    })

    test("Checkbox with custom class", () => {
        render(<CheckboxTest />)
        const input = screen.getByTestId("checkbox")

        expect(screen.getByTestId("checkboxLabel")).toHaveClass("test")
    })

    test("Checkbox checked", () => {
        render(<CheckboxTest />)
        const input = screen.getByTestId("checkbox")

        expect(input).not.toBeChecked()
        userEvent.click(input)
        expect(input).toBeChecked()
        expect(screen.getByTestId("checkboxLabel")).toHaveClass("checked")
        userEvent.click(input)
        expect(input).not.toBeChecked()
        expect(screen.getByTestId("checkboxLabel")).not.toHaveClass("checked")
    })
})

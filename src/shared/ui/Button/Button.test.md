/* import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { useState } from "react"
import { Button, ButtonVariant } from "./Button"

describe("Button", () => {
    test("Button with default styles", () => {
        render(<Button>Submit</Button>)
        const button = screen.getByTestId("button")

        expect(button).toBeInTheDocument()
        expect(button).toHaveClass("outline")
        expect(button).not.toHaveClass("clearInverted")
        expect(button).not.toHaveClass("filled-red")
        expect(button).not.toHaveClass("filled-gray")
        expect(button).not.toHaveClass("disabled")
        screen.debug()
    })

    test("Button with filled-red class", () => {
        render(<Button variant={ButtonVariant.FILLED_RED}>Submit</Button>)
        expect(screen.getByText("Submit")).toHaveClass("filled-red")
        screen.debug()
    })

    test("Button with filled-gray class", () => {
        render(<Button variant={ButtonVariant.FILLED_GREY}>Submit</Button>)
        expect(screen.getByText("Submit")).toHaveClass("filled-gray")
        screen.debug()
    })

    test("Button with clearInverted class", () => {
        render(<Button variant={ButtonVariant.CLEAR_INVERTED}>Submit</Button>)
        expect(screen.getByText("Submit")).toHaveClass("clearInverted")
        screen.debug()
    })

    test("Button with disabled class", () => {
        render(<Button disabled>Submit</Button>)
        expect(screen.getByText("Submit")).toHaveClass("disabled")
        screen.debug()
    })

    test("Button onClick test", () => {
        const handleClick = jest.fn()
        render(<Button onClick={handleClick}>Click Me!</Button>)

        userEvent.click(screen.getByText("Click Me!"))

        expect(handleClick).toHaveBeenCalled()
        screen.debug()
    })

    test("Button onClick test when disabled", () => {
        const handleClick = jest.fn()
        render(
            <Button onClick={handleClick} disabled>
                Click Me!
            </Button>
        )

        userEvent.click(screen.getByText("Click Me!"))

        expect(handleClick).not.toHaveBeenCalled()
        screen.debug()
    })
})
 */

import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { useState } from "react"
import { Input, InputType } from "./Input"

describe("Input", () => {
    test("Input test", () => {
        render(<Input value="" onChange={jest.fn()} />)
        expect(screen.getByTestId("InputContainer")).toBeInTheDocument()
        expect(screen.getByTestId("Input")).toBeInTheDocument()
        expect(screen.queryByTestId("InputLabel")).not.toBeInTheDocument()
        expect(screen.queryByTestId("Input")).not.toHaveAttribute("placeholder", "placeholder")
        expect(screen.queryByTestId("InputContainer")).not.toHaveClass("incorrect")
    })

    test("Input without label, but isRequired", () => {
        render(<Input value="" onChange={jest.fn()} isRequired />)
        expect(screen.getByTestId("InputContainer")).not.toContainHTML("*")
    })

    test("Input with label test", () => {
        render(<Input value="" onChange={jest.fn()} id="test" label="input label test" />)
        expect(screen.getByTestId("InputLabel")).toBeInTheDocument()
    })

    test("Input with label isRequired", () => {
        render(
            <Input value="" onChange={jest.fn()} id="test" label="input label test" isRequired />
        )
        expect(screen.getByTestId("InputLabel")).toContainHTML("*")
    })

    test("Input test with value", () => {
        render(<Input value="Input value test" onChange={jest.fn()} />)
        expect(screen.getByTestId("Input")).toHaveAttribute("value", "Input value test")
    })

    test("Input type = text", () => {
        render(<Input value="" onChange={jest.fn()} />)
        expect(screen.getByTestId("Input")).toHaveAttribute("type", InputType.TEXT)
    })

    test("Input type = number", () => {
        render(<Input value="" onChange={jest.fn()} type={InputType.NUMBER} />)
        expect(screen.getByTestId("Input")).toHaveAttribute("type", InputType.NUMBER)
    })

    test("Input type = email", () => {
        render(<Input value="" onChange={jest.fn()} type={InputType.EMAIL} />)
        expect(screen.getByTestId("Input")).toHaveAttribute("type", InputType.EMAIL)
    })

    test("Input type = password", () => {
        render(<Input value="" onChange={jest.fn()} type={InputType.PASSWORD} />)
        expect(screen.getByTestId("Input")).toHaveAttribute("type", InputType.PASSWORD)
    })

    test("Input with placeholder", () => {
        render(<Input value="" onChange={jest.fn()} placeholder="placeholder test" />)
        expect(screen.getByPlaceholderText("placeholder test")).toBeInTheDocument()
    })

    test("Input with error", () => {
        render(<Input value="" onChange={jest.fn()} error="Enter correct text" />)
        expect(screen.getByText("Enter correct text")).toBeInTheDocument()
        expect(screen.getByTestId("InputContainer")).toHaveClass("incorrect")
    })

    test("Input value changes", () => {
        function InputTest() {
            const [value, setValue] = useState("")

            return (
                <Input
                    id="test"
                    label="Name"
                    value={value}
                    placeholder="Enter text"
                    onChange={value => setValue(value)}
                    error="Enter correct text"
                    isRequired
                />
            )
        }

        render(<InputTest />)
        userEvent.type(screen.getByTestId("Input"), "Input value changes test")
        expect(screen.getByTestId("Input")).toHaveAttribute("value", "Input value changes test")
    })

    screen.debug()
})

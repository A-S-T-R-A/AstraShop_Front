import { render, screen } from "@testing-library/react"
import { Loader } from "./Loader"

describe("Loader", () => {
    test("Loader render", () => {
        render(<Loader />)

        expect(screen.getByTestId("loader")).toBeInTheDocument()
    })

    test("Loader with custom className", () => {
        render(<Loader className="test" />)

        expect(screen.getByTestId("loader")).toHaveClass("test")
    })
})

import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { MemoryRouter, Route, Router, Routes } from "react-router-dom"
import { AppLink } from "./AppLink"

describe("Applink", () => {
    test("Applink render", () => {
        render(
            <MemoryRouter>
                <AppLink to="/">Test</AppLink>
            </MemoryRouter>
        )
        const appLink = screen.getByTestId("AppLink")
        expect(appLink).toBeInTheDocument()
    })

    test("Applink with className", () => {
        render(
            <MemoryRouter>
                <AppLink to="/" className="testClassName">
                    Test
                </AppLink>
            </MemoryRouter>
        )
        const appLink = screen.getByTestId("AppLink")
        expect(appLink).toHaveClass("testClassName")
    })

    test("Applink test onСlick", () => {
        render(
            <MemoryRouter initialEntries={["/"]}>
                <Routes>
                    <Route path="/about" element={<div>TEST</div>} />
                </Routes>
                <AppLink to="/about">About</AppLink>
            </MemoryRouter>
        )
        const appLink = screen.getByTestId("AppLink")
        userEvent.click(appLink)
        expect(screen.getByText("TEST")).toBeInTheDocument()
    })
})

import { render, screen } from "@testing-library/react"
import { Typography, TypographyColor, TypographyVariant } from "./Typography"

describe("Typography test", () => {
    test("Default typography", () => {
        render(<Typography>Typography test</Typography>)
        expect(screen.getByTestId("typography")).toBeInTheDocument()
        expect(screen.getByTestId("typography")).toHaveClass("variantP")
        expect(screen.getByTestId("typography")).toHaveClass("base")
        expect(screen.getByTestId("typography")).not.toHaveClass("variantH1")
        expect(screen.getByTestId("typography")).not.toHaveClass("variantH2")
        expect(screen.getByTestId("typography")).not.toHaveClass("variantH3")
        expect(screen.getByTestId("typography")).not.toHaveClass("variantH4")
        expect(screen.getByTestId("typography")).not.toHaveClass("darkGray")
        expect(screen.getByTestId("typography")).not.toHaveClass("inverted")
        expect(screen.getByTestId("typography")).not.toHaveClass("accent")
        expect(screen.getByTestId("typography")).not.toHaveClass("bold")
    })

    test("H1 typography", () => {
        render(<Typography variant={TypographyVariant.H1}>Typography test</Typography>)
        expect(screen.getByTestId("typography")).toHaveClass("variantH1")
    })

    test("H2 typography", () => {
        render(<Typography variant={TypographyVariant.H2}>Typography test</Typography>)
        expect(screen.getByTestId("typography")).toHaveClass("variantH2")
    })

    test("H3 typography", () => {
        render(<Typography variant={TypographyVariant.H3}>Typography test</Typography>)
        expect(screen.getByTestId("typography")).toHaveClass("variantH3")
    })

    test("H4 typography", () => {
        render(<Typography variant={TypographyVariant.H4}>Typography test</Typography>)
        expect(screen.getByTestId("typography")).toHaveClass("variantH4")
    })

    test("Typography color darkgray", () => {
        render(<Typography color={TypographyColor.DARK_GRAY}>Typography test</Typography>)
        expect(screen.getByTestId("typography")).toHaveClass("darkGray")
    })

    test("Typography color inverted", () => {
        render(<Typography color={TypographyColor.INVERTED}>Typography test</Typography>)
        expect(screen.getByTestId("typography")).toHaveClass("inverted")
    })

    test("Typography color accent", () => {
        render(<Typography color={TypographyColor.ACCENT}>Typography test</Typography>)
        expect(screen.getByTestId("typography")).toHaveClass("accent")
    })

    test("Typography bold", () => {
        render(<Typography isBold>Typography test</Typography>)
        expect(screen.getByTestId("typography")).toHaveClass("bold")
    })
})

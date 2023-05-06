import { render, screen, waitFor } from "@testing-library/react"
import { AsyncImage, ImageFit } from "./AsyncImage"

describe("AsyncImage test", () => {
    const src = "https://developed-by.me:3000/uploads/images-1681991589475.jpg"
    test("AsyncImage render", async () => {
        render(<AsyncImage />)
        expect(screen.getByTestId("async-image")).toBeInTheDocument()
        expect(screen.getByTestId("srcSkeleton")).toBeInTheDocument()
        expect(await screen.findByTestId("loadingSkeleton")).toBeInTheDocument()
        expect(screen.queryByTestId("placeholder")).not.toBeInTheDocument()
        expect(screen.getByTestId("async-image")).not.toHaveClass("contain")
        expect(screen.getByTestId("async-image")).not.toHaveClass("cover")
        expect(screen.getByTestId("async-image")).not.toHaveClass("fill")
        expect(screen.getByTestId("async-image")).not.toHaveClass("scale-down")
        expect(screen.getByTestId("async-image")).not.toHaveClass("none")
    })

    test("AsyncImage with src, containFit", () => {
        render(<AsyncImage src={src} />)
        expect(screen.getByTestId("async-image")).toBeInTheDocument()
        expect(screen.getByTestId("async-image")).toHaveClass("contain")
    })

    test("AsyncImage with coverFit", () => {
        render(<AsyncImage src={src} objectFit={ImageFit.COVER} />)
        expect(screen.getByTestId("async-image")).toBeInTheDocument()
        expect(screen.getByTestId("async-image")).toHaveClass("cover")
    })

    test("AsyncImage with fillFit", () => {
        render(<AsyncImage src={src} objectFit={ImageFit.FILL} />)
        expect(screen.getByTestId("async-image")).toBeInTheDocument()
        expect(screen.getByTestId("async-image")).toHaveClass("fill")
    })
    test("AsyncImage with noneFIt", () => {
        render(<AsyncImage src={src} objectFit={ImageFit.NONE} />)
        expect(screen.getByTestId("async-image")).toBeInTheDocument()
        expect(screen.getByTestId("async-image")).toHaveClass("none")
    })
    test("AsyncImage with scaleFit", () => {
        render(<AsyncImage src={src} objectFit={ImageFit.SCALE_DOWN} />)
        expect(screen.getByTestId("async-image")).toBeInTheDocument()
        expect(screen.getByTestId("async-image")).toHaveClass("scale_down")
    })

    test("AsyncImage with brokenSrc", async () => {
        const invalidSrc = "dsad"
        render(<AsyncImage src={invalidSrc} objectFit={ImageFit.SCALE_DOWN} />)
        expect(screen.getByTestId("async-image")).toBeInTheDocument()
        expect(screen.getByTestId("loadingSkeleton")).toBeInTheDocument()
    })
})

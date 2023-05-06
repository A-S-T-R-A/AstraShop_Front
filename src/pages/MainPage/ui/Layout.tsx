/* eslint-disable no-restricted-syntax */
import { Children, ReactElement, ReactNode, useEffect, useState } from "react"
import { v4 as uuid } from "uuid"
import { useDebounce } from "shared/lib/hooks/useDebounce/useDebounce"

interface IRowProps {
    children: ReactNode
    schema?: { [key: number]: number[] }
    height?: CSSDimensionType
    gap?: CSSDimensionType
}

export function Row({
    children,
    schema = {},
    height = "auto",
    gap = 0,
}: IRowProps): ReactElement | null {
    const [width, setWidth] = useState(window.innerWidth)
    const debouncedResize = useDebounce(() => setWidth(window.innerWidth), 200)

    useEffect(() => {
        window.addEventListener("resize", debouncedResize)
        return () => window.removeEventListener("resize", debouncedResize)
    })

    const childrenArray = Children.toArray(children)
    const schemaArray = Object.entries(schema).reverse()

    if (childrenArray.length === 0) return null

    if (!schema || !schemaArray.length) {
        return <div>{childrenArray[0]}</div>
    }

    for (const slot of schemaArray) {
        const [key, value] = slot

        if (width >= +key) {
            const gridTemplateColumns = value
                .filter(item => item !== 0)
                .map(item => `${item}fr`)
                .join(" ")

            return (
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns,
                        gap,
                    }}
                >
                    {value.map((_, index) => (
                        <div
                            key={uuid()}
                            style={{ display: value[index] === 0 ? "none" : "block", height }}
                        >
                            {childrenArray[index]}
                        </div>
                    ))}
                </div>
            )
        }
    }

    return null
}

interface ILayoutProps {
    children: ReactNode
    gap: CSSDimensionType
}

export function Layout({ children, gap = 0 }: ILayoutProps) {
    return <div style={{ display: "flex", flexDirection: "column", gap }}>{children}</div>
}

import { Children, ReactElement, ReactNode, isValidElement } from "react"

export function getLayoutColumns(children: ReactElement[] | ReactElement, columns: string[]) {
    const childrenArray: {
        [key: string]: ReactElement
    }[] = []

    Children.forEach(children, child => {
        if (isValidElement(child)) {
            const { column } = child.props as { column: string }
            childrenArray.push({ [column]: child })
        }
    })

    const result: {
        [key: string]: ReactNode[]
    } = { all: Children.toArray(children) }

    columns.forEach(column => {
        const array = childrenArray
            .filter(item => Object.keys(item)[0] === column)
            .map(item => item[column])
        result[column] = array
    })

    return result
}

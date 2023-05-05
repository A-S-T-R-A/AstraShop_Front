import { ProductAttribute } from "entities/Product"

interface AttributesDataProps {
    description: string
    attributes: ProductAttribute[]
}

interface ArticleData {
    title: string
    text: string[] | string
}

export function useAttributesData({ description, attributes }: AttributesDataProps) {
    function formatAttributes(attributes: ProductAttribute[]): ArticleData[] {
        const formattedAttributes: ArticleData[] = []

        attributes.forEach(attribute => {
            const title = Object.keys(attribute)[0]
            const value = attribute[title][0].name

            formattedAttributes.push({
                title,
                text: [value],
            })
        })

        return formattedAttributes
    }

    const data = [
        {
            text: description,
        },
        ...formatAttributes(attributes),
    ]

    return data
}

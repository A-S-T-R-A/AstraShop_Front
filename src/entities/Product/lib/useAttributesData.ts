import { useTranslation } from "react-i18next"
import { ProductAttribute } from "../model/types"

interface AttributesDataProps {
    description: string
    attributes: ProductAttribute[]
}

interface ArticleData {
    title: string
    text: string[] | string
}

export function useAttributesData({ description, attributes }: AttributesDataProps) {
    const { t } = useTranslation()

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
            title: t("productDescriptionTitle"),
            text: description,
        },
        ...formatAttributes(attributes),
    ]

    return data
}

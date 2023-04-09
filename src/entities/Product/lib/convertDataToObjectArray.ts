import { ProductAttributes } from "../model/types"
import { ArticleData } from "../ui/ProductDetails/ProductInfo/ProductInfo"

export function convertDataToObjectArray(data: ProductAttributes) {
    const objectArray: ArticleData[] = []

    Object.keys(data).forEach(key => {
        const title = key.charAt(0).toUpperCase() + key.slice(1)
        const text = Array.isArray(data[key]) ? data[key] : String(data[key])

        objectArray.push({ title, text })
    })

    return objectArray
}

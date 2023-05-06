import { ProductAll } from "../ProductAll/ProductAll"
import { VariantInfo } from "../VariantInfo/VariantInfo"
import { VariantPictures } from "../VariantPictures/VariantPictures"
import { VariantReviews } from "../VariantReviews/VariantReviews"

export const navList = [
    { name: "All", el: <ProductAll /> },
    { name: "Info", el: <VariantInfo /> },
    { name: "Pictures", el: <VariantPictures /> },
    { name: "Reviews", el: <VariantReviews /> },
]

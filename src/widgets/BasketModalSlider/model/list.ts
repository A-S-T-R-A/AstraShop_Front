import img from "shared/assets/images/img3.png"

export interface basketItemsType {
    productName: string
    productPrice: string
    id: string
    img?: string
}

export const basketItemsList: basketItemsType[] = [
    { productName: "Yamaha YSP-5600 Black", productPrice: "1 931 грн", img, id: "1" },
    { productName: "Yamaha YSP-5600 Black", productPrice: "1 931 грн", img, id: "2" },
    { productName: "Yamaha YSP-5600 Black", productPrice: "1 931 грн", img, id: "3" },
    { productName: "Yamaha YSP-5600 Black", productPrice: "1 931 грн", img, id: "4" },
]

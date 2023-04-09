import { RoutePath, AppRoutes } from "shared/config/routeConfig/routeConfig"

interface footerlinksItem {
    id: string
    text: string
    path: string
}

interface footerLinksType {
    title: string
    list: footerlinksItem[]
}

export const footerLinksData: footerLinksType = {
    title: "Информация",
    list: [
        { id: "1", text: "Доставка и оплата", path: RoutePath.delivery },
        { id: "2", text: "О нас", path: RoutePath.about },
        { id: "3", text: "Контакты", path: RoutePath.contacts },
    ],
}

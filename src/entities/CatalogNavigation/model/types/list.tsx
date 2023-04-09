/* import {
    BabyCarriageIcon,
    BoxIcon,
    CarIcon,
    FemaleIcon,
    HouseIcon,
    LampIcon,
    LaptopIcon,
    MaleIcon,
    ShopBagIcon,
    SoundIcon,
    TabletIcon,
} from "shared/assets/icons/list"
import { RoutePath } from "shared/config/routeConfig/routeConfig" */

/* export interface sidebarNavigationSubMenuType {
    path: string
    text: string
    id: string
}

export interface sidebarNavigationItemsType {
    path: string
    text: string
    id: string
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
    subMenu?: sidebarNavigationSubMenuType[]
}

export const sidebarNavigationList: sidebarNavigationItemsType[] = [
    {
        id: "1",
        text: "Дом",
        Icon: HouseIcon,
        path: RoutePath.sub_category,
        subMenu: [
            { id: "1.1", text: "Дом", path: RoutePath.sub_category },
            { id: "1.2", text: "Дом", path: RoutePath.sub_category },
            { id: "1.3", text: "Дом", path: RoutePath.sub_category },
        ],
    },
    {
        id: "2",
        text: "Автомобиль",
        Icon: CarIcon,
        path: RoutePath.sub_category,
        subMenu: [
            { id: "2.1", text: "Дом", path: RoutePath.sub_category },
            { id: "2.2", text: "Дом", path: RoutePath.sub_category },
            { id: "2.3", text: "Дом", path: RoutePath.sub_category },
        ],
    },
    {
        id: "3",
        text: "Телефоны и планшеты",
        Icon: TabletIcon,
        path: RoutePath.sub_category,
        subMenu: [
            { id: "3.1", text: "Дом", path: RoutePath.sub_category },
            { id: "3.2", text: "Дом", path: RoutePath.sub_category },
            { id: "3.3", text: "Дом", path: RoutePath.sub_category },
        ],
    },
    {
        id: "4",
        text: "Компьютерная периферия",
        Icon: LaptopIcon,
        path: RoutePath.sub_category,
        subMenu: [
            { id: "4.1", text: "Дом", path: RoutePath.sub_category },
            { id: "4.2", text: "Дом", path: RoutePath.sub_category },
            { id: "4.3", text: "Дом", path: RoutePath.sub_category },
        ],
    },
    {
        id: "5",
        text: "Звуковое оборудование",
        Icon: SoundIcon,
        path: RoutePath.sub_category,
        subMenu: [
            { id: "5.1", text: "Дом", path: RoutePath.sub_category },
            { id: "5.2", text: "Дом", path: RoutePath.sub_category },
            { id: "5.3", text: "Дом", path: RoutePath.sub_category },
        ],
    },
    {
        id: "6",
        text: "Световое оборудование",
        Icon: LampIcon,
        path: RoutePath.sub_category,
        subMenu: [
            { id: "6.1", text: "Дом", path: RoutePath.sub_category },
            { id: "6.2", text: "Дом", path: RoutePath.sub_category },
            { id: "6.3", text: "Дом", path: RoutePath.sub_category },
        ],
    },
    {
        id: "7",
        text: "Мужчинам",
        Icon: MaleIcon,
        path: RoutePath.sub_category,
        subMenu: [
            { id: "7.1", text: "Дом", path: RoutePath.sub_category },
            { id: "7.2", text: "Дом", path: RoutePath.sub_category },
            { id: "7.3", text: "Дом", path: RoutePath.sub_category },
        ],
    },
    {
        id: "8",
        text: "Женщинам",
        Icon: FemaleIcon,
        path: RoutePath.sub_category,
        subMenu: [
            { id: "8.1", text: "Дом", path: RoutePath.sub_category },
            { id: "8.2", text: "Дом", path: RoutePath.sub_category },
            { id: "8.3", text: "Дом", path: RoutePath.sub_category },
        ],
    },
    {
        id: "9",
        text: "Детям",
        Icon: BabyCarriageIcon,
        path: RoutePath.sub_category,
        subMenu: [
            { id: "9.1", text: "Дом", path: RoutePath.sub_category },
            { id: "9.2", text: "Дом", path: RoutePath.sub_category },
            { id: "9.3", text: "Дом", path: RoutePath.sub_category },
        ],
    },
    {
        id: "10",
        text: "Торговля",
        Icon: ShopBagIcon,
        path: RoutePath.sub_category,
        subMenu: [
            { id: "10.1", text: "Дом", path: RoutePath.sub_category },
            { id: "10.2", text: "Дом", path: RoutePath.sub_category },
            { id: "10.3", text: "Дом", path: RoutePath.sub_category },
        ],
    },
    {
        id: "11",
        text: "Чехлы и пленки",
        Icon: TabletIcon,
        path: RoutePath.sub_category,
        subMenu: [
            { id: "11.1", text: "Дом", path: RoutePath.sub_category },
            { id: "11.2", text: "Дом", path: RoutePath.sub_category },
            { id: "11.3", text: "Дом", path: RoutePath.sub_category },
        ],
    },
    {
        id: "12",
        text: "Разное",
        Icon: BoxIcon,
        path: RoutePath.sub_category,
        subMenu: [
            { id: "12.1", text: "Дом", path: RoutePath.sub_category },
            { id: "12.2", text: "Дом", path: RoutePath.sub_category },
            { id: "12.3", text: "Дом", path: RoutePath.sub_category },
        ],
    },
] */

export interface navigationSubcategory {
    name: string
    id: number
    image: string
    parent_category_id: number
}

export interface navigationCategory {
    name: string
    id: number
    icon: string
    categories: navigationSubcategory[]
}

export type navigationTreeType = navigationCategory[]

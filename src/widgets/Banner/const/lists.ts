import { DeviceType } from "shared/lib/getCurrentDevice/getCurrentDevice"
import { RoutePath } from "shared/config/routeConfig/const"

import image4 from "./images/old/image4.png"
import image5 from "./images/old/image5.png"
import image6 from "./images/old/image6.png"

import phoneImage1 from "./images/phoneImage31.jpg"
import phoneImage2 from "./images/phoneImage32.jpg"
import phoneImage3 from "./images/phoneImage33.jpg"
import phoneImage4 from "./images/phoneImage34.jpg"

import tabletImage1 from "./images/tabletImage31.jpg"
import tabletImage2 from "./images/tabletImage32.jpg"
import tabletImage3 from "./images/tabletImage33.jpg"
import tabletImage4 from "./images/tabletImage34.jpg"

import desktopImg1 from "./images/desktopImage31.jpg"
import desktopImg2 from "./images/desktopImage32.jpg"
import desktopImg3 from "./images/desktopImage33.jpg"
import desktopImg4 from "./images/desktopImage34.jpg"

import desktopSingle1 from "./images/desktopSingle1.jpg"
import desktopSingle2 from "./images/desktopSingle2.jpg"
import desktopSingle3 from "./images/desktopSingle3.jpg"

import tabletSingle1 from "./images/tabletSingle1.jpg"
import tabletSingle2 from "./images/tabletSingle2.jpg"
import tabletSingle3 from "./images/tabletSingle3.jpg"

import phoneSingle1 from "./images/phoneSingle1.jpg"
import phoneSingle2 from "./images/phoneSingle2.jpg"
import phoneSingle3 from "./images/phoneSingle3.jpg"

interface IBannerList {
    id: number
    link: string
    images: { [key in DeviceType]: string }
}

export const bannerSliderList: IBannerList[] = [
    {
        id: 1,
        link: `${RoutePath.category}/87`,
        images: { mobile: phoneImage1, tablet: tabletImage1, desktop: desktopImg1 },
    },
    {
        id: 2,
        link: `${RoutePath.category}/34`,
        images: { mobile: phoneImage2, tablet: tabletImage2, desktop: desktopImg2 },
    },
    {
        id: 3,
        link: `${RoutePath.category}/93`,
        images: { mobile: phoneImage3, tablet: tabletImage3, desktop: desktopImg3 },
    },
    {
        id: 4,
        link: `${RoutePath.category}/95`,
        images: { mobile: phoneImage4, tablet: tabletImage4, desktop: desktopImg4 },
    },
]

export const singleBannerList: IBannerList[] = [
    {
        id: 1,
        link: `${RoutePath.category}/86`,
        images: { mobile: phoneSingle1, tablet: tabletSingle1, desktop: desktopSingle1 },
    },
    {
        id: 2,
        link: `${RoutePath.category}/101`,
        images: { mobile: phoneSingle2, tablet: tabletSingle2, desktop: desktopSingle2 },
    },
    {
        id: 3,
        link: `${RoutePath.category}/93`,
        images: { mobile: phoneSingle3, tablet: tabletSingle3, desktop: desktopSingle3 },
    },
]

interface bannersRowListType {
    id: string
    title: string
    desc?: string
    link: string
    img: string
}

export const bannersRowList: bannersRowListType[] = [
    {
        id: "1",
        title: "banner1",
        desc: "bannerDesc",
        img: image4,
        link: "/86",
    },
    {
        id: "2",
        title: "banner2",
        img: image5,
        link: "/95",
    },
    {
        id: "3",
        title: "banner3",
        img: image6,
        link: "/94",
    },
]

import { ResponsiveObject, Settings } from "react-slick"

type ResponsiveSettings = ResponsiveObject[]
const responsive: ResponsiveSettings = [
    {
        breakpoint: 1300,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
        },
    },
    {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
        },
    },
    {
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
        },
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
        },
    },
]

export const sliderSettings: Settings = {
    dots: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    speed: 500,
    autoplaySpeed: 3000,
    autoplay: true,
    arrows: false,
    swipeToSlide: true,
    dotsClass: "slickSlider__dots",
    responsive,
}

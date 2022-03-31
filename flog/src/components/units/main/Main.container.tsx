import MainUI from "./Main.presenter";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { useState } from "react";

export default function Main() {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    arrows: false,
    autoplay: true,
    cssEase: "linear",
    fade: true,
    beforeChange: (current, next) => setActiveSlide(next),
    afterChange: (current) => setActiveSlide(current),
  };

  return <MainUI settings={settings} activeSlide={activeSlide} />;
}

import MainUI from "./Main.presenter";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { useEffect, useState } from "react";

export default function Main() {
  const [bgImgNumber, setBgImgNumber] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    arrows: false,
    cssEase: "linear",
    beforeChange: (_, next: number) => setBgImgNumber(next),
  };
  useEffect(() => {
    console.log(typeof bgImgNumber);
  }, [settings]);
  return <MainUI settings={settings} bgImgNumber={bgImgNumber} />;
}

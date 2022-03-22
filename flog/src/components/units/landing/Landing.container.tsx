import LandingPageUI from "./Landing.presenter";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function LandingPage() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: true,
    arrows: false,
    cssEase: "linear",
  };
  return <LandingPageUI settings={settings} />;
}

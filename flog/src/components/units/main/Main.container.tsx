import MainUI from "./Main.presenter";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function Main() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    arrows: false,
    autoplay: true,
    cssEase: "linear",
  };

  return <MainUI settings={settings} />;
}

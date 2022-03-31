import styled from "@emotion/styled";
import { IBgImgProps } from "./Main.types";
export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const SubSection = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 80px 0 117px;
  h4 {
    margin-left: 12px;
    font-size: 36px;
  }
`;
export const SliderBg = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const MainImg = styled.div`
  width: 100%;
  height: 800px;
  .slick-dots {
    bottom: 56px;
    position: absolute;
    color: #fff;

    button::before {
      font-size: 16px;
      font-weight: 500;
      color: #fff;
      border: #fff;
      content: "○";
    }

    .slick-active {
      button::before {
        color: #fff;
        fill: #fff;
        content: "●";
      }
    }
  }
`;
export const SliderWrapper = styled.div`
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

export const BackImgBox = styled.div`
  height: 800px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${(props: IBgImgProps) =>
    props.bgImg === 1 ? "#58bd97" : props.bgImg === 2 ? "#70baef" : "#ef7088"};
`;

export const ImageBox = styled.div`
  position: relative;
  overflow: hidden;
  width: 552px;
  height: 539px;
  margin-left: auto;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  position: relative;
  background-image: ${(props: IBgImgProps) =>
    props.bgImg === 1
      ? 'url("/img/main-bg-img1.png")'
      : props.bgImg === 2
      ? 'url("/img/main-bg-img2.png")'
      : 'url("/img/main-bg-img3.png")'};

  ::after {
    background-image: ${(props: IBgImgProps) =>
      props.bgImg === 1 ? 'url("/img/main-bg-img1-eclipse.png")' : ""};
    background-repeat: no-repeat;
    background-size: contain;
    content: "";
    width: 200px;
    height: 220px;
    z-index: 50;
    position: absolute;
    bottom: -86px;
    right: 7.5%;
    color: #fff;
    display: block;
  }
  ::before {
    background-image: ${(props: IBgImgProps) =>
      props.bgImg === 1 ? 'url("/img/main-bg-img1-star.png")' : ""};
    background-repeat: no-repeat;
    background-size: contain;
    content: "";
    width: 100px;
    height: 100px;
    z-index: 50;
    position: absolute;
    bottom: 15%;
    right: 2.5%;
    font-family: "Montserrat Alternates";
    color: #fff;
    display: block;
  }
  filter: blur(2px);
  opacity: 0;
  transition: all 4s ease;
  &.isActive {
    filter: blur(0);
    opacity: 1;
  }
`;

export const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
`;
export const TitleSub = styled.div`
  font-size: 36px;
  font-weight: 500;
  word-break: keep-all;
  margin-bottom: 2px;
  transform: translateY(80px);
  opacity: 0;
  transition: all 1.5s ease;
  &.isActive {
    transform: translateY(0);
    opacity: 1;
  }
`;
export const TitleMain = styled.div`
  font-size: 80px;
  font-family: "Montserrat Alternates";
  font-weight: 700;
  transform: translateY(80px);
  opacity: 0;
  transition: all 1.5s ease;
  transition-delay: 0.5s;
  &.isActive {
    transform: translateY(0);
    opacity: 1;
  }
`;
export const Description = styled.div`
  font-weight: 500;
  font-size: 28px;
  margin-top: 70px;
  word-break: keep-all;
  line-height: 1.6em;
  color: #fff;
  opacity: 0.6;
  transform: translateY(80px);
  opacity: 0;
  transition: all 1.5s ease;
  transition-delay: 1s;
  &.isActive {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const LookAround = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const LookAroundBox = styled.div`
  width: calc(50% - 15px);
  height: auto;
  aspect-ratio: 61 / 50;
  margin-top: 24px;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  color: #fff;
  cursor: pointer;

  &:hover .bgImage {
    transform: scale(1.1);
  }
`;

export const Text = styled.div`
  z-index: 8;
  position: absolute;
  padding: 44px 40px;
`;
export const BoxDescription = styled.div`
  font-size: 28px;
  margin-bottom: 28px;
  font-weight: 500;
`;
export const BoxTitle = styled.div`
  font-size: 48px;
  margin-bottom: 20px;
  font-weight: 700;
`;
export const BoxBtn = styled.button`
  font-weight: 500;
  border-radius: 20px;
  padding: 7px 27px;
  border: none;
  :hover {
    background-color: #58bd97;
    color: #fff;
  }
`;

export const BoxBgImage = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) => `url(${props.img}) no-repeat center`};
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.6s ease;
  :after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }
`;

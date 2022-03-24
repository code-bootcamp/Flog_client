import styled from "@emotion/styled";

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
  height: 100px;
  margin-top: 74px;
  h4 {
    margin-left: 12px;
    font-size: 36px;
  }
`;
export const SliderBg = styled.div`
  background-color: ${(props) =>
    props.bgImgNumber === 0
      ? "#58bd97"
      : props.bgImgNumber === 1
      ? "#70baef"
      : "#ef7088"};
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const MainImg = styled.div`
  max-width: 1200px;
  .slick-dots {
    bottom: 25px;
    position: absolute;
    button::before {
      color: #fff;
      border: #fff;
      background-color: transparent;
    }
  }
`;
export const SliderWrapper = styled.div`
  position: relative;
  display: flex;
`;

export const BackImgBox = styled.div`
  height: calc(100vh - 60px);
  width: 100%;
`;

export const ImageBox = styled.div`
  position: relative;
  height: calc(100vh - 60px);
  overflow: hidden;
  margin-left: 20%;

  width: 39%;

  &.img0 {
    background: url(/img/main-bg-img1.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
  &.img1 {
    background: url(/img/main-bg-img2.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
  &.img2 {
    background: url(/img/main-bg-img3.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
`;

export const TextGroup = styled.div`
  padding: 8% 0 8% 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  height: calc(100vh - 60px);
`;
export const TitleSub = styled.div`
  font-size: 32px;
  font-weight: 500;
  word-break: keep-all;
`;
export const TitleMain = styled.div`
  font-size: 80px;
  font-weight: 700;
  margin-bottom: 69px;
`;
export const Description = styled.div`
  font-weight: 500;
  font-size: 24px;
  word-break: keep-all;
  line-height: 1.8em;
  color: #c6e8db;
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
  position: relative;
  color: #fff;
  transition: 0.3s;
  :hover {
    transform: scale(1.03);
  }
  img {
    position: absolute;
    max-width: 100%;
  }
  /* background-image: url("/img/landing-lookAround-bg.png"); */
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

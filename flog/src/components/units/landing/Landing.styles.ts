import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const SubSection = styled.div`
  width: 1200px;
  height: 100px;
  margin-top: 74px;
  h4 {
    margin-left: 12px;
    font-size: 36px;
  }
`;
export const MainImg = styled.div`
  height: calc(100vh - 60px);
  position: relative;
  width: 100%;
`;
export const SliderItem = styled.img`
  width: 100%;
  height: calc(100vh - 60px);
`;

export const TextGroup = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8% 0 8% 5%;
  display: flex;
  top: 0;
  flex-direction: column;
  justify-content: space-between;
  color: #fff;
  position: absolute;
  width: calc(800 * 100% / 1920);
  height: 100%;
`;
export const TitleSub = styled.div`
  font-size: 40px;
  font-weight: 500;
  word-break: keep-all;
`;
export const TitleMain = styled.div`
  font-size: 96px;
  color: #58bd97;
`;
export const Description = styled.div`
  font-weight: 500;
  font-size: 20px;
  word-break: keep-all;
  line-height: 1.8em;
`;

export const LookAround = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1240px;
`;
export const LookAroundBox = styled.div`
  width: 610px;
  height: 500px;
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
  :hover {
    background-color: #58bd97;
    color: #fff;
  }
`;

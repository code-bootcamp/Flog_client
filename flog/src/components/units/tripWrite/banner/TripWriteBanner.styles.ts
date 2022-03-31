import styled from "@emotion/styled";
import { ITipWriteBannerUIEmotionProps } from "./TripWriteBanner.types";

export const Banner = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
`;

export const BgImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props: ITipWriteBannerUIEmotionProps) => {
    if (props.url)
      return `url(${props.bucketUrl + props.url}) no-repeat center`;
    else return `url("/img/mytrip-write-banner-img1.jpg") no-repeat center`;
  }};
  background-size: cover;
  z-index: 0;
  :after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
  }
`;
export const Text = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.div`
  font-size: 1.8rem;
  font-weight: 500;
  color: #ffffff;
  margin-bottom: 5px;
`;
export const SubTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
`;

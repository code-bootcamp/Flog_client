import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/Media";

export const Banner = styled.div`
  width: 100%;
  height: 640px;
  position: relative;
  @media ${breakPoints.mobile} {
    height: 280px;
  }
  @media ${breakPoints.tablet} {
  }
`;

export const BgImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("/img/mytrips-banner-img1.png") no-repeat center;
  background-size: cover;
  z-index: 0;
`;

export const BgImage2 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("/img/mytrips-banner-img2.png") no-repeat center;
  background-size: cover;
  z-index: 0;
`;

export const Contents = styled.div`
  position: relative;
  z-index: 1;

  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
`;

export const Title = styled.div`
  font-size: 2.4rem;
  font-weight: 500;
  color: #2c3131;
  line-height: 120%;
  text-align: center;
  margin-bottom: 60px;
  @media ${breakPoints.mobile} {
    font-size: 20px;
    font-weight: 400;
  }
  @media ${breakPoints.tablet} {
  }
`;

export const Illust1 = styled.div`
  margin-top: 35px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
  margin-bottom: 67px;
`;

export const ImageAirplane = styled.div`
  img {
    position: relative;
    top: 20px;
  }
  margin-top: 35px;
`;

export const ImageCloud1 = styled.div``;

export const ImageCloud2 = styled.div`
  img {
    position: relative;
    top: 25px;
  }
`;
export const Illust2 = styled.div`
  margin-top: 35px;
  display: flex;
  flex-direction: row;
  img {
    width: auto;
    height: 100%;
  }
  @media ${breakPoints.mobile} {
    img {
      margin-top: 0px;
      width: auto;
      height: 50%;
    }
  }
  @media ${breakPoints.tablet} {
  }
`;

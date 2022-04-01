import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/Media";
export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 110px;
  @media ${breakPoints.mobile} {
    padding-bottom: 60px;
  }
`;
export const Banner = styled.div`
  width: 100%;
  height: 360px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media ${breakPoints.mobile} {
    height: 200px;
  }
  @media ${breakPoints.tablet} {
  }
`;
export const BannerImage = styled.div`
  width: 100%;
  height: 100%;
  background: red;
  position: absolute;
  top: 0;
  left: 0;
  background: url("/img/mypage-banner-bg.png") no-repeat center;
  background-size: cover;
  z-index: 0;
`;
export const BannerButton = styled.div`
  position: relative;
  z-index: 0;
  width: 100%;
  max-width: 1200px;
  height: calc(100% - 72px);
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  button {
    @media ${breakPoints.mobile} {
      position: absolute;
      top: 16px;
      right: 16px;
    }
    @media ${breakPoints.tablet} {
      position: absolute;

      right: 16px;
    }
  }
`;
export const UserInfo = styled.div`
  width: auto;
  height: auto;
  position: relative;
  top: -60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const UserImage = styled.div`
  width: 180px;
  height: 180px;
  overflow: hidden;
  border: 1px solid #a1dac5;
  border-radius: 50%;
  margin-bottom: 37px;
  @media ${breakPoints.mobile} {
    width: 96px;
    height: 96px;
  }
  @media ${breakPoints.tablet} {
  }
`;
export const NoImage = styled.div`
  width: 100%;
  height: 100%;
  background: #eaf7f2;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 180px;
  overflow: hidden;
  img {
    width: 110px;
    height: 110px;
  }
  @media ${breakPoints.mobile} {
    width: 96px;
    height: 96px;
    overflow: hidden;
    img {
      width: 60px;
      height: 60px;
    }
  }
  @media ${breakPoints.tablet} {
  }
`;
export const UserName = styled.div`
  text-align: center;
  .name {
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 10px;
    color: #2c3131;
    @media ${breakPoints.mobile} {
      font-size: 24px;
    }
    @media ${breakPoints.tablet} {
    }
  }
  .email {
    font-size: 1.3rem;
    color: #2c3131;
    @media ${breakPoints.mobile} {
      font-size: 14px;
    }
    @media ${breakPoints.tablet} {
    }
  }
`;

export const BoxWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  @media ${breakPoints.mobile} {
    width: 100%;
    padding: 0 15px;
  }
  @media ${breakPoints.tablet} {
  }
`;

export const PointBox = styled.div`
  width: 100%;
  max-width: 892px;
  height: 96px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  top: -20px;
  border: 1px solid #58bd97;
  border-radius: 20px;
  padding: 29px 38px;
  @media ${breakPoints.mobile} {
    height: 50px;
    border-radius: 10px;
    padding: 18px 12px;
  }
`;
export const PointText = styled.span`
  font-size: 1.75rem;
  color: #58bd97;
  font-weight: 500;
  width: 200px;
  @media ${breakPoints.mobile} {
    font-size: 14px;
    font-weight: 400;
  }
`;
export const Amount = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: calc(100% - 400px);
  padding: 0 34px;

  span {
    font-size: 2.5rem;
    font-weight: 600;
    color: #2c3131;
    @media ${breakPoints.mobile} {
      font-size: 20px;
      font-weight: 500;
    }
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    font-size: 20px;
    padding: 0;
  }
`;
export const PointButton = styled.div`
  width: 180px;
  button {
    @media ${breakPoints.mobile} {
      width: 85px;
      height: 38px;
      padding: 0;
      margin-left: 20px;
    }
  }
  @media ${breakPoints.mobile} {
    width: 100px;
  }
`;
export const MenuBox = styled.div`
  width: 100%;
  margin-top: 40px;
  @media ${breakPoints.mobile} {
    margin-top: 00px;
  }
`;
export const MenuList = styled.ul`
  display: block;
  li {
    display: block;
    transition: all 0.2s ease;
    border-radius: 10px;
    overflow: hidden;

    button {
      display: block;
      width: 100%;
      padding: 25px 35px;
      font-size: 1.5rem;
      background: transparent;
      border: 0;
      text-align: left;
      cursor: pointer;
      @media ${breakPoints.mobile} {
        padding: 17.5px 12px;
        font-weight: 450;
        font-size: 18px;
        line-height: 140%;
        color: #2c3131;
      }
    }
    :hover {
      background: #f1f1f1;
    }
  }
`;

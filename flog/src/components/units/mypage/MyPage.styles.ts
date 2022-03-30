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
`;
export const Banner = styled.div`
  width: 100%;
  height: 360px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
`;
export const NoImage = styled.div`
  width: 100%;
  height: 100%;
  background: #eaf7f2;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const UserName = styled.div`
  text-align: center;
  .name {
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 10px;
    color: #2c3131;
  }
  .email {
    font-size: 1.3rem;
    color: #2c3131;
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
    width: 100%;
  }
`;
export const PointText = styled.span`
  font-size: 1.75rem;
  color: #58bd97;
  font-weight: 500;
  width: 200px;
  @media ${breakPoints.mobile} {
    width: 100px;
    font-size: 1.5rem;
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
  }
  @media ${breakPoints.mobile} {
    font-size: 1.8rem;
    width: calc(100% - 200px);
  }
`;
export const PointButton = styled.div`
  width: 180px;
  button {
    @media ${breakPoints.mobile} {
      width: 100px;
      height: 58px;
      padding: 0;
    }
  }
  @media ${breakPoints.mobile} {
    width: 100px;
  }
`;
export const MenuBox = styled.div`
  width: calc(100% - 30px);
  max-width: 1200px;
  margin-top: 40px;
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
    }
    :hover {
      background: #f1f1f1;
    }
  }
`;

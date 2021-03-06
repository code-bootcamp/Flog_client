import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/Media";

export const Container = styled.div`
  width: 100%;
  height: auto;
  position: relative;
`;
export const darkScreen = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  opacity: 0.6;
  position: fixed;
  top: 0;
  z-index: 15;
  display: ${(props) => (props.darkMode ? "block" : "none")};
`;
export const Contents = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: ${(props) => (props.darkMode ? "" : "relative")}; ;
`;
export const ToggleResponsive = styled.div`
  background-image: url("/img/mytrips-responsive.png");
  width: 56px;
  height: 56px;
  position: fixed;
  right: 0;
  top: 50%;
  background-size: cover;
  z-index: 9;
  display: none;
  @media ${breakPoints.mobile} {
    display: block;
  }
`;
export const InnerWrap = styled.div`
  max-width: 1200px;
  width: 100%;
  min-height: 700px;

  display: flex;
  margin: 40px 0 120px;
  @media ${breakPoints.mobile} {
    margin-bottom: 0;
  }
`;
export const LogListWrapper = styled.div`
  position: sticky;
  top: 0;
  width: calc(26000% / 1200);
  margin-right: 100px;
  @media ${breakPoints.mobile} {
    position: fixed;
    top: 0;
    right: 0;
    background-color: #fff;
    margin: 0;
    height: 100vh;
    z-index: 16;
    width: 280px;
  }
`;

export const DimBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 11;
  display: none;
`;

export const XButton = styled.div`
  font-size: 21px;
  position: absolute;
  z-index: 20;
  right: 20px;
  top: 20px;
  color: #626262;
`;

export const Bar = styled.div`
  padding-left: 39px;
  width: 100%;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e9e9e9;
  @media ${breakPoints.mobile} {
    padding-left: 0;
    display: ${(props) => (props.mine ? "" : "none")};
  }
`;
export const MoveBack = styled.div`
  font-size: 18px;
  color: #58bd97;
  :hover {
    cursor: pointer;
  }
  img {
    margin-right: 12px;
  }
  @media ${breakPoints.mobile} {
    position: absolute;
    z-index: 10;
    background-color: #fff;
    top: -48px;
    padding-left: 15px;

    height: 48px;
    display: flex;
    align-items: center;
  }
`;
export const BtnGroup = styled.div`
  display: flex;
  height: 60px;
  text-align: center;

  @media ${breakPoints.mobile} {
    width: 100%;
  }

  div {
    height: 60px;
    text-align: center;
    display: flex;
    padding: 0 16px;
    align-items: center;
    border-right: 1px solid #e9e9e9;

    :hover {
      cursor: pointer;
    }
    &.share {
      display: flex;
      @media ${breakPoints.mobile} {
        flex-grow: 1;
      }
      img {
        margin-right: 12px;
        width: 17px;
        height: 20px;
      }
    }
    &.delete {
      color: #e25c5c;
    }
  }
`;

export const PlanBtnGroup = styled.div`
  display: flex;
  padding-top: 24px;

  flex-direction: column;
`;

export const DetailBox = styled.div``;

export const PlanWrapper = styled.div`
  margin-top: 14px;
  width: 100%;
  @media ${breakPoints.mobile} {
    position: relative;
    z-index: 10;
  }
`;

export const ToggleImg = styled.img`
  top: 18px;
  left: 68px;
  width: 16px;
  position: absolute;
  :hover {
    cursor: pointer;
  }
`;

export const SelectBox = styled.div``;
export const EditorWrapper = styled.div`
  width: calc(820 * 100% / 1200);
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

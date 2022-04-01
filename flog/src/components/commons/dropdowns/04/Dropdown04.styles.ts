import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/Media";

export const SelectButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 160px;
  height: 60px;
  background: #ffffff;
  border-radius: 10px;
  line-height: 150%;
  position: relative;
  padding-left: 24px;
  padding-right: 28px;
  cursor: pointer;
  z-index: 10;
  @media ${breakPoints.mobile} {
    width: 100px;
    height: 48px;
    padding-left: 10px;
    padding-right: 10px;
  }
  @media ${breakPoints.tablet} {
  }
`;

export const Selected = styled.div`
  color: #2c3131;
  font-size: 20px;
  font-weight: 400;
  @media ${breakPoints.mobile} {
    font-size: 14px;
    font-weight: 400;
  }
  @media ${breakPoints.tablet} {
  }
`;

export const SelectIcon = styled.div`
  width: 20px;
  height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${breakPoints.mobile} {
    font-size: 14px;
    font-weight: 300;
  }
  @media ${breakPoints.tablet} {
  }
`;

export const Option = styled.div`
  position: absolute;
  width: 155px;
  left: 2px;
  top: 65px;
  background: #ffffff;
  box-shadow: 0px 4px 36px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  @media ${breakPoints.mobile} {
    width: 98px;
    left: 1px;
    top: 50px;
  }
  @media ${breakPoints.tablet} {
  }

  ul {
    li {
      list-style: none;
      text-align: left;
      width: 150px;
      height: 50px;
      border-radius: 8px;
      @media ${breakPoints.mobile} {
        width: 100px;
        height: 40px;
      }
      @media ${breakPoints.tablet} {
      }
      :hover {
        color: #58bd97;
      }
      span {
        display: block;
        font-size: 16px;
        font-weight: 200;
        padding: 12px 20px;
        cursor: pointer;
        text-align: center;
        border-bottom: 1px solid #e9e9e9;
        @media ${breakPoints.mobile} {
          font-size: 14px;
          padding: 8px;
        }
        @media ${breakPoints.tablet} {
        }
      }
    }
    li:last-of-type {
      span {
        border-bottom: none;
      }
    }
  }
`;

import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/Media";

export const SelectButton = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 340px;
  height: 60px;
  background: #ffffff;
  border: 1px solid #a9a9a9;
  border-radius: 10px;
  font-size: 16px;
  color: #626262;
  line-height: 150%;
  position: relative;
  padding-left: 24px;
  padding-right: 28px;

  cursor: pointer;
  z-index: 10;
  @media ${breakPoints.mobile} {
    padding-left: 10px;
    padding-right: 10px;
  }
  @media ${breakPoints.tablet} {
  }
`;

export const Selected = styled.div`
  color: #2c3131;
  font-size: 16px;
  font-weight: 400;
  margin-right: 30px;
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
  width: 340px;
  height: 200px;
  overflow-y: scroll;
  left: 2px;
  top: 65px;
  background: #ffffff;
  box-shadow: 0px 4px 36px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  @media ${breakPoints.mobile} {
    width: 330px;
    height: 200px;
    overflow-y: scroll;
    left: 2px;
    top: 60px;
  }
  @media ${breakPoints.tablet} {
  }

  ul {
    li {
      list-style: none;
      text-align: left;
      width: 320px;
      height: 50px;
      border-radius: 8px;
      @media ${breakPoints.mobile} {
        width: 330px;
        height: 100%;
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
          height: 50px;
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

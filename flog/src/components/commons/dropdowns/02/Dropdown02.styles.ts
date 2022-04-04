import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/Media";

export const SelectButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 338px;
  height: 56px;
  border: 1px solid #a9a9a9;
  border-radius: 8px;
  line-height: 150%;
  position: relative;
  padding-left: 24px;
  padding-right: 28px;
  cursor: pointer;
`;

export const Selected = styled.div`
  color: #2c3131;
  font-size: 16px;
  font-weight: 300;
`;

export const SelectIcon = styled.div`
  width: 20px;
  height: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Option = styled.div`
  position: absolute;
  width: 338px;
  left: 0px;
  top: 60px;
  background: #ffffff;
  box-shadow: 0px 4px 36px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  z-index: 2;
  overflow-y: scroll;
  @media ${breakPoints.mobile} {
    height: 200px;
    overflow-y: scroll;
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
      cursor: pointer;

      span {
        display: block;
        font-size: 16px;
        font-weight: 200;
        padding: 12px 20px;
        text-align: left;
        border-bottom: 1px solid #e9e9e9;
        :hover {
          background-color: #eaf7f2;
        }
      }
    }
    li:first-of-type {
      span {
        border-radius: 8px 8px 0 0;
      }
    }
    li:last-of-type {
      span {
        border-radius: 0 0 8px 8px;
      }
    }
  }
`;

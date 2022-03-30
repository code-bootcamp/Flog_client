import styled from "@emotion/styled";

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
  z-index: 999;
`;

export const Selected = styled.div`
  color: #2c3131;
  font-size: 20px;
  font-weight: 400;
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
  width: 155px;
  left: 2px;
  top: 65px;
  background: #ffffff;
  box-shadow: 0px 4px 36px rgba(0, 0, 0, 0.05);
  border-radius: 8px;

  ul {
    li {
      list-style: none;
      text-align: left;
      width: 150px;
      height: 50px;
      border-radius: 8px;
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
      }
    }
    li:last-of-type {
      span {
        border-bottom: none;
      }
    }
  }
`;

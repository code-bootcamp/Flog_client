import styled from "@emotion/styled";

export const SelectButton = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 160px;
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

export const Hour = styled.span`
  margin-right: 10px;
  margin-left: 5px;
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
  width: 160px;
  height: 240px;
  overflow-y: scroll;
  left: 0px;
  top: 60px;
  background-color: #ffffff;
  box-shadow: 0px 4px 36px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  z-index: 999;
  ul {
    li {
      list-style: none;
      width: 100%;
      height: 50px;
      border-radius: 8px;
      cursor: pointer;

      span {
        display: block;
        font-size: 16px;
        font-weight: 200;
        padding: 12px 20px;
        text-align: center;
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

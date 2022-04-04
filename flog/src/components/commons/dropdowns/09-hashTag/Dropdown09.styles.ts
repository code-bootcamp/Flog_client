import styled from "@emotion/styled";

export const SelectButton = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  border-radius: 10px;
  padding: 0 24px;
  border: none;
  margin-left: 10px;
  width: 230px;
  height: 48px;
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
  width: 220px;
  left: 3px;
  top: 50px;
  background: #ffffff;
  box-shadow: 0px 4px 36px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  height: 150px;
  overflow-y: scroll;
  ul {
    li {
      list-style: none;
      text-align: left;
      width: 200px;
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
        border: none;
      }
    }
  }
`;

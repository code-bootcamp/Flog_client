import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/Media";

export const Search = styled.div`
  display: flex;
  flex-direction: row;
  width: 82%;
`;

export const SearchBox = styled.div`
  width: 100%;
  height: 60px;
  background: #ffffff;
  border-radius: 10px;
  padding: 0 24px;
  border: none;
  font-size: 16px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${breakPoints.mobile} {
    width: 230px;
    height: 48px;
    margin-left: 10px;
    ::placeholder {
      font-weight: 400;
      font-size: 15px;
    }
  }
  @media ${breakPoints.tablet} {
  }

  // 체크박스 인풋은 숨김처리
  .checkbox input {
    display: none;
  }

  .checkbox {
    display: flex;
    align-items: center;
    margin-right: 30px;
  }
  .checkbox_text {
    margin-left: 10px;
    font-size: 20px;
    color: #2c3131;
    cursor: pointer;
  }

  // 체크박스 테두리
  .checkbox_icon {
    display: inline-block;
    background-color: transparent;
    width: 20px;
    height: 20px;
    border: 1px solid #cacaca;
    border-radius: 2px;
    position: relative;
    cursor: pointer;
  }

  // 체크되었을 때 설정
  .checkbox input:checked + .checkbox_icon {
    background-color: #58bd97;
    border: none;
    background-image: url("/img/icon-search-check.svg");
    background-repeat: no-repeat;
    background-position: center;
  }
`;

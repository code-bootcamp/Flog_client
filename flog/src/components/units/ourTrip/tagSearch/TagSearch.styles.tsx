import styled from "@emotion/styled";

export const Search = styled.div`
  display: flex;
  flex-direction: row;
`;

// export const SearchBox = styled.div`
//   width: 664px;
//   height: 60px;
//   background: #ffffff;
//   border-radius: 10px;
//   margin-right: 20px;
//   padding: 0 24px;
//   border: none;
//   font-size: 16px;
//   ::placeholder {
//     color: #a9a9a9;
//   }
//   :focus {
//     outline: none;
//   }
//   input[type="checkbox"] {
//     position: absolute;
//     width: 20px;
//     height: 20px;
//   }
//   input[type="checkbox"] + label {
//     display: inline-block;
//     position: relative;
//     padding-left: 32px;
//     cursor: pointer;
//   }

//   input[type="checkbox"] + label::before {
//     content: "";
//     position: absolute;
//     left: 0;
//     top: 0;
//     width: 20px;
//     height: 20px;
//     border: 1px solid #cacaca;
//     box-sizing: border-box;
//     border-radius: 2px;
//   }
//   input[type="checkbox"] + label::after {
//     content: "";
//     position: absolute;
//     left: 0;
//     top: 0;
//     width: 20px;
//     height: 20px;
//     background: #58bd97;
//     border-radius: 2px;
//   }
// `;

export const SearchBox = styled.div`
  width: 664px;
  height: 60px;
  background: #ffffff;
  border-radius: 10px;
  margin-right: 20px;
  padding: 0 24px;
  border: none;
  font-size: 16px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  // 체크박스 인풋은 숨김처리
  .checkbox input {
    display: none;
  }

  .checkbox {
    display: flex;
    align-items: center;
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
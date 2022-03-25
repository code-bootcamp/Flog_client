import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 900;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background-color: rgba(44, 49, 49, 0.7);
  overflow: hidden;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const ModalWrapper = styled.div`
  width: 600px;
  height: 520px;
  padding: 44px;
  border: none;
  border-radius: 20px;
  z-index: 999;
  background-color: #ffffff;
`;
export const Modal = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
`;

export const Contents = styled.div`
  margin-bottom: 4rem;
`;

export const Exit = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
  img {
    width: 23px;
    :hover {
      cursor: pointer;
    }
  }
`;

export const Title = styled.div`
  font-size: 1.9rem;
  line-height: 53px;
  text-align: center;
  margin-bottom: 2rem;
`;
export const UserPoint = styled.div`
  color: #626262;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  word-break: keep-all;
  margin-bottom: 1.6rem;
`;
export const Select = styled.select`
  width: 338px;
  height: 56px;
  border: 1px solid #cacaca;
  border-radius: 8px;
  padding-left: 24px;
  font-size: 0.9rem;
  line-height: 150%;

  background: url("/img/icon-modal-dropdown.svg") no-repeat 95% 50%;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  select::-ms-expand {
    display: none;
  }
`;

export const Option = styled.option``;
// export const Contents = styled.div`
//   color: #626262;
//   font-size: 20px;
//   line-height: 140%;
//   text-align: center;
//   word-break: keep-all;
// `;

import styled from "@emotion/styled";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(44, 49, 49, 0.7);
  z-index: 900;
`;

export const ModalWrapper = styled.div`
  position: absolute;
  background-color: #ffffff;
  border-radius: 20px;
  width: 600px;
  height: 790px;
  padding: 44px;
  border: none;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
export const Modal = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
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

export const Contents = styled.div`
  margin-bottom: 3rem;
`;
export const Title = styled.div`
  font-size: 2rem;
  line-height: 53px;
  text-align: center;
  font-weight: 500;
  margin-bottom: 60px;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.4rem;
`;

export const Label = styled.div`
  font-size: 1.1rem;
  margin-right: 34px;
  color: #626262;
`;

export const Input = styled.input`
  width: 485px;
  height: 56px;
  border: 1px solid #58bd97;
  border-radius: 8px;
  padding-left: 24px;
  font-size: 0.9rem;
  line-height: 150%;
`;

export const Select = styled.select`
  width: 338px;
  height: 56px;
  border: 1px solid #a9a9a9;
  border-radius: 8px;
  padding-left: 24px;
  font-size: 16px;
  line-height: 150%;
  background: url("/img/icon-modal-dropdown.svg") no-repeat 95% 50%;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  color: #626262;
  select::-ms-expand {
    display: none;
  }

  :focus {
    border: 1px solid #58bd97;
    outline: none;
    color: #2c3131;
  }
`;

export const Option = styled.option``;

export const ButtonWrap = styled.div`
  margin-top: 100px;
`;

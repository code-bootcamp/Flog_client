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
  height: 755px;
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

export const Exit = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
  img {
    width: 23px;
    :hover {
      cursor: pointer;
    }
  }
`;

export const Contents = styled.div`
  margin-bottom: 4rem;
`;

export const Title = styled.div`
  font-size: 2rem;
  line-height: 53px;
  text-align: center;
  margin-bottom: 60px;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Label = styled.div`
  font-size: 1.1rem;
  color: #626262;
  text-align: left;
  width: 50px;
`;

export const Input = styled.input`
  width: 344px;
  height: 56px;
  border: 1px solid #cacaca;
  border-radius: 8px;
  padding-left: 24px;
  font-size: 1.1rem;
  line-height: 150%;
`;

export const TimeInputWrap = styled.div`
  width: 344px;
  display: flex;
  justify-content: space-between;
`;

export const TimeInput = styled.input`
  width: 164px;
  height: 56px;
  border: 1px solid #cacaca;
  border-radius: 8px;
  padding-left: 24px;
  font-size: 1.1rem;
  line-height: 150%;
`;

export const MemoInput = styled.textarea`
  width: 344px;
  height: 100px;
  border: 1px solid #cacaca;
  border-radius: 8px;
  padding-left: 24px;
  padding: 16px 24px 16px 24px;
  font-size: 1.1rem;
  line-height: 150%;
  resize: none;
`;

export const Select = styled.select`
  width: 485px;
  height: 56px;
  border: 1px solid #cacaca;

  border-radius: 8px;
  padding-left: 24px;
  font-size: 0.9rem;
  line-height: 150%;
  background: url("/img/Modal-dropdown.svg") no-repeat 95% 50%;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  select::-ms-expand {
    display: none;
  }
`;

export const Option = styled.option``;

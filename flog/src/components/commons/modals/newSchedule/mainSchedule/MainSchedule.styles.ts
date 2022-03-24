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
  width: 788px;
  height: 700px;
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
  img {
    width: 23px;
    :hover {
      cursor: pointer;
    }
  }
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
  margin-bottom: 15px;
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
  width: 485px;
  height: 56px;
  border: 1px solid #58bd97;

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

export const ButtonWrap = styled.div`
  margin-top: 100px;
`;

export const ModalCloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  border-radius: 5px;
  height: 60px;
  width: 115px;
  border-radius: 100px;
  padding: 16px, 40px, 16px, 40px;

  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;

  background-color: ${(props: IIsButtonActiveProps) =>
    props.isButtonActive ? "#58BD97" : "black"};
`;

export interface IIsButtonActiveProps {
  isButtonActive: boolean;
}

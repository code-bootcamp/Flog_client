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
  height: 700px;
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

export const Head = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 60px;
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
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Contents = styled.div`
  margin-bottom: 40px;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
`;

export const Label = styled.div`
  font-size: 1.1rem;
  margin-right: 34px;
  color: #626262;
`;

export const CategoryWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 10px;
`;
export interface IDetailBudgetEmotionProps {
  isSelect: boolean;
}

export const Category = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 90px;
  border-radius: 12px;
  background-color: ${(props: IDetailBudgetEmotionProps) =>
    props.isSelect ? "#F1F1F1" : "none"};
`;

export const CategoryIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  width: 48px;
  height: 38px;
  img {
    :hover {
      cursor: pointer;
    }
  }
`;

export const CategoryLabel = styled.div`
  text-align: center;
  font-size: 16px;
  line-height: 19px;
  color: #818181;
`;

export const Input = styled.input`
  width: 344px;
  height: 56px;
  border: 1px solid #cacaca;
  border-radius: 8px;
  padding-left: 24px;
  font-size: 1.1rem;
  line-height: 150%;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
export const TimeInputWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

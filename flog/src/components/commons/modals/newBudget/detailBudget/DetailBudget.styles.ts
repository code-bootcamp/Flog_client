import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/Media";

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
  @media ${breakPoints.mobile} {
    width: 100vw;
    height: 100vh;
    border: none;
    border-radius: 0px;
    padding: 20px;
    left: 0px;
    top: 0px;
    transform: translate(0, 0);
  }
  @media ${breakPoints.tablet} {
  }
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

export const Form = styled.form`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${breakPoints.mobile} {
    height: 100%;
    margin-bottom: 00px;
    justify-content: space-between;
  }
  @media ${breakPoints.tablet} {
  }
`;

export const Contents = styled.div`
  margin-bottom: 1rem;
  @media ${breakPoints.mobile} {
    margin-bottom: 0px;
  }
  @media ${breakPoints.tablet} {
  }
`;
export const Title = styled.div`
  font-size: 2rem;
  line-height: 53px;
  text-align: center;
  margin-bottom: 30px;
  @media ${breakPoints.mobile} {
    font-size: 20px;
  }
  @media ${breakPoints.tablet} {
  }
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  @media ${breakPoints.mobile} {
    flex-direction: column;
    align-items: center;
    align-items: flex-start;
    margin-bottom: 12px;
  }
  @media ${breakPoints.tablet} {
  }
`;

export const Label = styled.div`
  font-size: 1.1rem;
  margin-right: 34px;
  color: #626262;
  @media ${breakPoints.mobile} {
    font-size: 14px;
    margin-right: 0px;
    font-weight: 300;
    margin-bottom: 6px;
  }
  @media ${breakPoints.tablet} {
  }
`;

export const CategoryWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 10px;
  @media ${breakPoints.mobile} {
    margin-bottom: 0px;
  }
  @media ${breakPoints.tablet} {
  }
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

  @media ${breakPoints.mobile} {
    width: 50px;
    height: 70px;
  }
  @media ${breakPoints.tablet} {
  }
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
  @media ${breakPoints.mobile} {
    height: 25px;
    img {
      width: 30px;
      height: 30px;
    }
  }
  @media ${breakPoints.tablet} {
  }
`;

export const CategoryLabel = styled.div`
  text-align: center;
  font-size: 16px;
  line-height: 19px;
  color: #818181;
  @media ${breakPoints.mobile} {
    font-size: 14px;
  }
  @media ${breakPoints.tablet} {
  }
`;

export const TimeInputWrap = styled.div`
  display: flex;
  justify-content: space-between;
  @media ${breakPoints.mobile} {
    display: none;
  }
  @media ${breakPoints.tablet} {
  }
`;

import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/Media";

export const Container = styled.div`
  width: 100%;
  height: auto;
`;
export const Contents = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 70px 0 100px;
  @media ${breakPoints.mobile} {
    margin: 24px 0 50px;
  }
`;
export const InnerWrap = styled.div`
  width: calc(100% - 30px);
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  @media ${breakPoints.mobile} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const BudgetBox = styled.div`
  width: 260px;
  height: auto;
  padding: 60px 36px;
  border-radius: 40px;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  position: sticky;
  top: 20px;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media ${breakPoints.tablet} {
    width: 180px;
    padding: 40px 20px;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    height: 95px;
    padding: 16px;
    border-radius: 20px;
    flex-direction: column;
    margin-bottom: 12px;
    box-shadow: 0px 4px 36px rgba(0, 0, 0, 0.05);
    border: 1px solid #e9e9e9;
  }
`;
export const MoneyBookBox = styled.div`
  width: calc(100% - 260px);
  padding-left: 42px;
  @media ${breakPoints.tablet} {
    width: calc(100% - 180px);
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    padding-left: 0;
  }
`;

export const ProgressBar = styled.div`
  width: 40px;
  height: 480px;
  border-radius: 20px;
  background: #f1f1f1;
  position: relative;

  .progress {
    width: 100%;
    height: ${(props) => props.progress + "%"};
    max-height: 100%;
    border-radius: 20px;
    position: absolute;
    bottom: 0;
    left: 0;
    background: linear-gradient(to top, #baedbc, #58bd97);
  }

  @media ${breakPoints.tablet} {
    height: 320px;
    width: 20px;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 10px;
    .progress {
      width: ${(props) => props.progress + "%"};
      height: 100%;
      background: linear-gradient(to right, #baedbc, #58bd97);
    }
  }
`;
export const BudgetText = styled.div`
  height: 480px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding-left: 20px;
  @media ${breakPoints.tablet} {
    height: 320px;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    height: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    padding: 0 20px;
  }
`;
export const AllAmount = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 20px;
  line-height: 1.5em;
  order: 2;
  @media ${breakPoints.tablet} {
    font-size: 18px;
  }
  @media ${breakPoints.mobile} {
    font-size: 14px;
    align-items: flex-end;
    .text1 {
      margin-bottom: 20px;
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }
`;
export const EditButton = styled.button`
  background: transparent;
  border: 0;
  margin-left: 7px;
  cursor: pointer;
`;
export const Amount = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 20px;
  line-height: 1.5em;
  @media ${breakPoints.tablet} {
    font-size: 18px;
  }
  @media ${breakPoints.mobile} {
    font-size: 14px;
    align-items: flex-start;
    order: 1;
    .text1 {
      margin-bottom: 20px;
    }
  }
`;

export const MoneyBookColumn = styled.div`
  width: 100%;
  height: auto;
  border-bottom: 1px solid #dddddd;
  margin-bottom: 40px;
  &:last-of-type {
    border-bottom: 0;
  }
  @media ${breakPoints.mobile} {
    margin-bottom: 0;
  }
`;
export const MoneyBookTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 40px;
  .title {
    font-size: 1.1rem;
    font-weight: 500;
  }
  .amount {
    font-size: 1.1rem;
    font-weight: 500;
  }
  @media ${breakPoints.mobile} {
    font-size: 18px;
    padding: 24px 0 36px;
  }
`;
export const MoneyBookCards = styled.div``;

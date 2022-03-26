import styled from "@emotion/styled";

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
`;
export const InnerWrap = styled.div`
  width: calc(100% - 30px); 
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;
export const BudgetBox = styled.div`
  width: 260px;
  height: auto;
  padding: 60px 36px;
  border-radius: 40px;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  position: sticky;
  top: 20px;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const MoneyBookBox = styled.div`
  width: calc(100% - 260px);
  padding-left: 42px;
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
    border-radius: 20px;
    position: absolute;
    bottom: 0;
    left: 0;
    background: linear-gradient(to top, #baedbc, #58bd97);
  }
`;
export const BudgetText = styled.div`
  height: 480px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding-left: 20px;
`;
export const AllAmount = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 20px;
  line-height: 1.5em;
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
`;

export const MoneyBookColumn = styled.div`
  width: 100%;
  height: auto;
  border-bottom: 1px solid #dddddd;
  margin-bottom: 40px;
  &:last-of-type {
    border-bottom: 0;
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
`;
export const MoneyBookCards = styled.div``;

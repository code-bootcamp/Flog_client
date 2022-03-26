import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: auto;
`;
export const Contents = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 0 100px;
`;

export const InnerWrap = styled.div`
  width: calc(100% - 30px);
  max-width: 1200px;
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
`;
export const Bar = styled.div`
  width: calc(100% - 30px);
  max-width: 1200px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const MoveBack = styled.div`
  font-size: 18px;
  color: #58bd97;
`;
export const BtnGroup = styled.div`
  display: flex;
  button {
    margin-left: 10px;
  }
`;
export const PlanBox = styled.div`
  display: flex;
  padding: 24px 20px;
  width: calc(260 * 100% / 1200);
  border: 1px solid #fff;
  flex-direction: column;

  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
`;

export const DetailBox = styled.div``;
export const PlanWrapper = styled.div`
  margin-top: 14px;
  width: 100%;
`;

export const DayWrapper = styled.div`
  padding-top: 10px;

  span {
    font-size: 20px;
    font-weight: 500;
    padding-left: 10px;
  }
  img {
    margin: 0 15px 2px;
    width: 14px;

    :hover {
      cursor: pointer;
    }
  }
`;

export const DayPlanWrapper = styled.div`
  margin-top: 22px;
`;

export const DayPlanDetail = styled.div`
  width: 100%;
  padding: 8px 16px;
  background-color: #f1f1f1;
  border-radius: 12px;
  margin-bottom: 12px;
  div {
    color: #818181;
    font-size: 12px;
  }
`;

export const DayPlanLabel = styled.div`
  font-weight: 500;
  font-size: 16px;
`;

// export const BudgetBox = styled.div`
//   width: 260px;
//   height: auto;
//   padding: 60px 36px;
//   border-radius: 40px;
//   background: #ffffff;
//   box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
//   position: sticky;
//   top: 20px;
//   left: 0;
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
// `;
// export const MoneyBookBox = styled.div`
//   width: calc(100% - 260px);
//   padding-left: 42px;
// `;

// export const ProgressBar = styled.div`
//   width: 40px;
//   height: 480px;
//   border-radius: 20px;
//   background: #f1f1f1;
//   position: relative;

//   .progress {
//     width: 100%;
//     height: ${(props) => props.progress + "%"};
//     border-radius: 20px;
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     background: linear-gradient(to top, #baedbc, #58bd97);
//   }
// `;
// export const BudgetText = styled.div`
//   height: 480px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: flex-start;
//   padding-left: 20px;
// `;
// export const AllAmount = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: flex-start;
//   font-size: 20px;
//   line-height: 1.5em;
// `;
// export const EditButton = styled.button`
//   background: transparent;
//   border: 0;
//   margin-left: 7px;
//   cursor: pointer;
// `;
// export const Amount = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: flex-start;
//   font-size: 20px;
//   line-height: 1.5em;
// `;

// export const MoneyBookColumn = styled.div`
//   width: 100%;
//   height: auto;
//   border-bottom: 1px solid #dddddd;
//   margin-bottom: 40px;
//   &:last-of-type {
//     border-bottom: 0;
//   }
// `;
// export const MoneyBookTitle = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
//   padding: 0 0 40px;
//   .title {
//     font-size: 1.1rem;
//     font-weight: 500;
//   }
//   .amount {
//     font-size: 1.1rem;
//     font-weight: 500;
//   }
// `;

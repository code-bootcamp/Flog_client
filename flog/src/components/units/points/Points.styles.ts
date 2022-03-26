import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const InnerWrap = styled.div`
  width: calc(100% - 30px);
  max-width: 1200px;
  margin: 50px 0 50px;
`;
export const Navigator = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 30px;
  span {
    color: #a9a9a9;
    font-size: 1.1rem;
    font-weight: 300;
    cursor: pointer;
    &.now {
      font-weight: 600;
      cursor: default;
    }
  }
`;
export const Title = styled.div`
  margin-bottom: 46px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const TitleText = styled.div`
  h2 {
    font-size: 2rem;
    color: #2c3131;
    font-weight: 500;
  }
`;
export const TitleDropdown = styled.div`
  height: 60px;
  border: 1px solid #cacaca;
  border-radius: 10px;
  padding: 0 20px;
  line-height: 60px;
  text-align: center;
  background: #f4f4f4;
`;
export const Contents = styled.div``;
export const Item = styled.div`
  border: 1px solid #e9e9e9;
  border-radius: 10px;
  margin-bottom: 12px;
  padding: 33px 36px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;
export const Status = styled.div`
  width: 100px;
  span {
    font-size: 1.5rem;
    font-weight: 400;
    &.charge {
      color: #ea4262;
    }
    &.payment {
      color: #a9a9a9;
    }
    &.earn {
      color: #58bd97;
    }
    &.cancle {
      color: #f7babb;
    }
  }
`;
export const ItemText = styled.div`
  width: calc(100% - 300px);
  .tit {
    font-size: 1.5rem;
    font-weight: 500;
    color: #2c3131;
    margin-bottom: 5px;
  }
  .date {
    font-size: 1.1rem;
    color: #a9a9a9;
  }
`;
export const ItemAmount = styled.div`
  width: 200px;
  text-align: right;
  .changed {
    font-size: 1.5rem;
    font-weight: 500;
    color: #2c3131;
    margin-bottom: 5px;
  }
  .amount {
    font-size: 1.1rem;
    color: #a9a9a9;
  }
`;

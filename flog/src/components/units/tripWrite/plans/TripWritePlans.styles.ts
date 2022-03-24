import styled from "@emotion/styled";

export const Container = styled.div`
  display: block;
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
`;

export const InnerWrap = styled.div`
  width: 95%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const Column = styled.div`
  display: block;
  width: 25%;
  padding: 11px;
  background: #f6f6f6;
  &:nth-of-type(2n) {
    background: #eeeeee;
  }
`;

export const TitleBox = styled.div`
  width: 100%;
`;
export const Title = styled.div``;
export const TitleNumber = styled.div``;
export const TitleText = styled.div``;
export const PlansBox = styled.div`
  width: 100%;
`;

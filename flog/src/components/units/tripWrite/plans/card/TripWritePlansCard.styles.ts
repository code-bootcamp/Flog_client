import styled from "@emotion/styled";

export const PlansBox = styled.div`
  width: 100%;
`;
export const Card = styled.div`
  width: 100%;
  height: auto;
  padding: 14px 20px;
  background: #f1f1f1;
  border-radius: 20px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Contents = styled.div`
  width: calc(100% - 20px);
  padding-right: 10px;
  cursor: pointer;
`;
export const Top = styled.div`
  margin-bottom: 8px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
export const StartTime = styled.span`
  background: #ffffff;
  font-size: 16px;
  font-weight: 400;
  border: 1px solid #e9e9e9;
  padding: 2px 16px;
  border-radius: 20px;
`;
export const Time = styled.span`
  font-size: 12px;
  color: #818181;
  margin: 0 8px;
`;
export const Center = styled.div`
  margin-bottom: 6px;
  padding-left: 3px;
`;
export const Name = styled.span`
  font-size: 16px;
  font-weight: 600;
`;
export const Bottom = styled.div`
  padding-left: 3px;
`;
export const Memo = styled.span`
  font-size: 12px;
  color: #818181;
  font-weight: 500;
  word-break: keep-all;
`;
export const Handle = styled.div`
  width: 20px;
  height: 55px;
  position: relative;
  :before {
    content: "";
    width: 20px;
    height: 12px;
    background: url("/img/icon-mytrip-write-card-upper.svg") no-repeat center;
    position: absolute;
    top: 0;
    left: 0;
  }
  :after {
    content: "";
    width: 20px;
    height: 12px;
    background: url("/img/icon-mytrip-write-card-lower.svg") no-repeat center;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;
export const Upper = styled.button`
  background: transparent;
  border: 0;
  margin-bottom: 20px;
`;
export const Lower = styled.button`
  background: transparent;
  border: 0;
`;

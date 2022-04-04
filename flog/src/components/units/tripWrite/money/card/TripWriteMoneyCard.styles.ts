import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/Media";

export const MoneyBox = styled.div`
  width: 100%;
`;

export const Card = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  @media ${breakPoints.mobile} {
    margin-bottom: 20px;
    min-height: 54px;
  }
`;
export const Time = styled.div`
  width: 80px;
  height: auto;
  font-size: 1.1rem;
  font-weight: 500;
`;
export const Contents = styled.div`
  width: calc(100% - 40px);
  padding: 14px 34px;
  background: #f1f1f1;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  @media ${breakPoints.mobile} {
    padding: 8px 20px;
    min-height: 54px;
  }
`;
export const Handle = styled.div`
  width: 50px;
  height: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  overflow: hidden;
  text-indent: -9999px;
  :before {
    content: "";
    display: block;
    width: 20px;
    height: 12px;
    background: url("/img/icon-mytrip-write-money-upper.svg");
    position: absolute;
    top: 0;
    right: 0;
  }
  :after {
    content: "";
    display: block;
    width: 20px;
    height: 12px;
    background: url("/img/icon-mytrip-write-money-lower.svg");
    position: absolute;
    bottom: 0;
    right: 0;
  }

  @media ${breakPoints.mobile} {
    width: 40px;
    height: 42px;
  }
`;
export const ContentsLeftBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
export const IconBox = styled.div`
  width: 50px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media ${breakPoints.mobile} {
    width: 25px;
    height: 20px;
    img {
      max-height: 100%;
    }
  }
`;
export const TextBox = styled.div`
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  .context {
    font-size: 1.1rem;
    font-weight: 500;
    margin-bottom: 2px;
  }
  .memo {
    font-size: 0.9rem;
    font-weight: 500;
    color: #818181;
  }
  @media ${breakPoints.mobile} {
    padding-left: 18px;
    .context {
      font-size: 14px;
      margin-bottom: 4px;
      word-break: keep-all;
    }
    .memo {
      font-size: 12px;
      line-height: 1.5em;
      word-break: keep-all;
    }
  }
`;
export const Amount = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
  @media ${breakPoints.mobile} {
    font-size: 14px;
    min-width: 75px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
`;
export const Upper = styled.button`
  margin-bottom: 28px;
  background: transparent;
  border: 0;
  @media ${breakPoints.mobile} {
    margin-bottom: 15px;
  }
`;
export const Lower = styled.button`
  background: transparent;
  border: 0;
`;

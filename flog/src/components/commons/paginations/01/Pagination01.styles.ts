import styled from "@emotion/styled";

export const Pagination = styled.div`
  width: 100%;
  max-width: 580px;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  margin-top: 36px;
`;
export const Prev = styled.div`
  width: 64px;
  height: 64px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .arrow {
    width: 100%;
    height: 100%;
    overflow: hidden;
    text-indent: -9999px;
    background: transparent;
    border: 0;
    background: url("/img/icon-pagination-prev-gray.svg") no-repeat center;
    cursor: pointer;
    transition: all 0.2s ease;
    border: 1px solid #bcbcbc;
    border-radius: 50%;
    :hover {
      background: #f6f6f6 url("/img/icon-pagination-prev-green.svg") no-repeat
        center;
      border-color: #58bd97;
    }
  }
`;
export const Page = styled.div`
  button {
    padding: 10px 15px;
    border-radius: 5px;
    font-size: 1rem;
    background: transparent;
    border: 0;
    font-weight: 800;
    color: #bcbcbc;
    cursor: pointer;
    transition: all 0.2s ease;
    &.isNow {
      color: #58bd97;
    }
    :hover {
      background: #f4f4f4;
    }
  }
`;
export const Next = styled.div`
  width: 64px;
  height: 64px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  .arrow {
    width: 100%;
    height: 100%;
    overflow: hidden;
    text-indent: -9999px;
    background: transparent;
    border: 0;
    background: url("/img/icon-pagination-next-gray.svg") no-repeat center;
    cursor: pointer;
    transition: all 0.2s ease;
    border: 1px solid #bcbcbc;
    border-radius: 50%;
    :hover {
      background: #f6f6f6 url("/img/icon-pagination-next-green.svg") no-repeat
        center;
      border-color: #58bd97;
    }
  }
`;

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
  width: 750px;
  height: 880px;
  padding: 25px;
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
  justify-content: space-between;
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
  font-size: 44px;
  line-height: 53px;
  text-align: center;
  margin-bottom: 60px;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 900;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background-color: rgba(44, 49, 49, 0.7);
  overflow: hidden;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const ModalWrapper = styled.div`
  width: 480px;
  height: 360px;
  padding: 44px;
  border: none;
  border-radius: 20px;
  z-index: 999;
  background-color: #ffffff;
`;
export const Modal = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Contents = styled.div`
  /* margin-bottom: 4rem; */
`;

export const Exit = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  /* margin-bottom: 2rem; */
  img {
    width: 23px;
    :hover {
      cursor: pointer;
    }
  }
`;

export const Title = styled.div`
  font-size: 1.7rem;
  line-height: 53px;
  text-align: center;
  margin-bottom: 1rem;
`;

export const Input = styled.input`
  width: 360px;
  height: 56px;
  border: 1px solid #a9a9a9;
  border-radius: 8px;
  text-align: center;
  line-height: 150%;
  color: #626262;
  font-size: 16px;
  ::placeholder {
    color: #a9a9a9;
  }
  :focus {
    border: 1px solid #58bd97;
    outline: none;
    color: #2c3131;
  }
  margin-bottom: 2rem;
`;

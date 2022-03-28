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
  width: 780px;
  height: auto;
  padding: 25px;
  border: none;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
export const Modal = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  padding: 10px 20px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
export const Title = styled.div`
  font-weight: 400;
  font-size: 30px;
  width: 100%;
  display: flex;
  color: #2c3131;
  justify-content: space-between;
  margin-bottom: 10px;
  img {
    width: 23px;
    :hover {
      cursor: pointer;
    }
  }
`;
export const Subtitle = styled.span`
  font-weight: 500;
  font-size: 22px;
  position: absolute;
  left: 20px;
  color: #626262;
  text-align: start;

  z-index: 9;
`;
export const Exit = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

// export const Title = styled.div`
//   font-size: 44px;
//   line-height: 53px;
//   text-align: center;
//   margin-bottom: 60px;
// `;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

import styled from "@emotion/styled";

export const Text = styled.div`
  font-size: 2.4rem;
  color: #2c3131;
  line-height: 120%;
  text-align: center;
  margin-bottom: 80px;
`;

export const RowContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
`;

export const Row1 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  grid-gap: 30px;
`;

export const Row3 = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Row4 = styled.div`
  width: cal(100%-760px);
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Row2 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  grid-gap: 30px;
`;

export const Image = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  position: relative;
  border-radius: 20px;
  border: none;
  aspect-ratio: 38 / 32.8;
  img {
    max-width: 100%;
    height: auto;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
`;

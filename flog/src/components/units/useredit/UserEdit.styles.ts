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
  margin: 50px 0 92px;
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
export const Contents = styled.form`
  padding: 57px 20px 96px;
  border: 1px solid #e9e9e9;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const UserImage = styled.div`
  width: 180px;
  height: 180px;
  position: relative;
`;
export const ErrorMsg = styled.div`
  color: red;
  font-size: 14px;

  height: 14px;
`;
export const NoImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid #a1dac5;
  border-radius: 50%;
  overflow: hidden;
  background: #eaf7f2;
`;
export const FileButton = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #ea4262;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: -6px;
  cursor: pointer;
  input {
    display: none;
  }
`;
export const NameInput = styled.div`
  margin: 38px 0;
`;
export const InputLabel = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 24px 0 10px;
  span {
    color: #a9a9a9;
    font-size: 1.1rem;
  }
`;
export const PhoneInput = styled.div`
  max-width: 480px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  & input {
    width: 30%;
  }
`;
export const BirthdayInput = styled.div`
  max-width: 480px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  & input {
    width: 30%;
  }
`;
export const EmailInput = styled.div`
  width: 100%;
  max-width: 480px;
  & input {
    width: 100%;
  }
`;
export const SubmitBox = styled.div`
  margin-top: 80px;
`;

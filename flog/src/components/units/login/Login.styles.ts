import styled from "@emotion/styled";

export const Container = styled.div``;
export const Bg = styled.div`
  background-image: url("./img/login-bg-img1.jpg");
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
`;
export const LoginBox = styled.div`
  margin: 100px 0;
  border-radius: 20px;
  width: 800px;
  background-color: #fff;
  padding: 62px 93px;
  h3 {
    text-align: center;
    font-size: 64px;
    font-weight: 700;
    margin-bottom: 14px;
  }
`;
export const Form = styled.form`
  border-bottom: 1px solid #cacaca;
  padding: 0 137px 26px;
`;
export const FormLabel = styled.div`
  margin-bottom: 8px;
  font-size: 14px;
`;
export const ErrorMsg = styled.div``;
export const checkBox = styled.div`
  display: flex;
  margin-bottom: 28px;
  input {
    width: 20px;
    margin-right: 8px;
    height: 20px;
  }
  div {
    font-size: 14px;
  }
`;
export const SubmitBtn = styled.button``;
export const GoogleBtn = styled.button``;
export const SignUp = styled.div`
  text-align: center;
  padding-top: 37px;
`;
export const MoveSignUp = styled.span``;

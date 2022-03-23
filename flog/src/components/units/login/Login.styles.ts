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
  color: #000000
;
  margin-top: 18px;
`;
export const ErrorMsg = styled.div`
  color: red;
  font-size:14px ;
  padding-top: 5px;
`;
export const checkBox = styled.div`
  display: flex;
  margin-bottom: 28px;
  margin-top: 18px;
  input {
    width: 20px;
    margin-right: 8px;
    height: 20px;
  }
  div {
    font-size: 14px;
  }
`;
export const SubmitBtn = styled.button`
width: 340px;
    height: 56px;
    border-radius: 10px;
    background-color: #58bd97;
    color: #fff;
    font-weight: 700;
    :hover {  
      background-color: #A1DAC5;
    }
    margin-bottom: 17px;
    border: none;
    font-size: 16px;


`;
export const GoogleBtn = styled.button`
      width: 340px;
    height: 56px;
    border-radius: 10px;
    background-color: #58bd97;
    color: #fff;
    font-size: 16px;

    font-weight: 700;
    :hover {  
      background-color: #A1DAC5;
    }
    margin-bottom: 17px;
    border: none;
    img {
      width: 32px;
      margin-right: 8px;
    }
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const SignUp = styled.div`
  text-align: center;
  padding-top: 37px;
  font-size: 14px;
`;
export const MoveSignUp = styled.span`
  color: #58BD97;
  margin-left: 11px;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

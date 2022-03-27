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
  /* width: 800px; */
  background-color: #fff;
  padding: 74px 230px 63px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    text-align: center;
    font-size: 44px;
    font-weight: 400;
    color: #2c3131;
    margin-bottom: 30px;
  }
`;
export const Lavel = styled.div``;
export const Form = styled.form`
  border-bottom: 1px solid #cacaca;
  position: relative;
  padding: 0 0 26px;
  width: 338px;
  img {
    position: absolute;
    right: 10px;
    top: 175px;
    :hover {
      cursor: pointer;
    }
  }
`;
export const FormLabel = styled.div`
  margin-bottom: 8px;
  font-size: 14px;
  margin-top: 18px;
`;
export const ErrorMsg = styled.div`
  color: red;
  font-size: 14px;

  height: 14px;
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
  margin: 45px 0 17px;
  border: none;
  transition: all 0.2s ease;
  font-size: 16px;
  cursor: pointer;
  :hover {
    border-color: #a1dac5;
    background: #a1dac5;
  }
 
  
  }
`;
export const GoogleBtn = styled.button``;
export const SignUp = styled.div`
  text-align: center;
  padding-top: 37px;
  font-size: 14px;
`;
export const MoveSignUp = styled.span`
  color: #58bd97;
  margin-left: 11px;
  text-decoration: underline;

  :hover {
    cursor: pointer;
  }
`;

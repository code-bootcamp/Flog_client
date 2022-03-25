import * as Login from "./Login.styles";
import ContainedInput01 from "../../commons/inputs/contained/01/ContainedInput01";

export default function LoginUI(props) {
  return (
    <>
      <Login.Container>
        <Login.Bg>
          <Login.LoginBox>
            <h3>flog</h3>
            <Login.Form onSubmit={props.handleSubmit(props.onclickSubmit)}>
              <Login.FormLabel>이메일</Login.FormLabel>
              <ContainedInput01
                type="text"
                id="email"
                register={props.register("email")}
                placeholder="이메일을 입력하세요"
                error={props.errorMsg.email !== ""}
              ></ContainedInput01>
              <Login.ErrorMsg>{props.errorMsg.email}</Login.ErrorMsg>;
              <Login.FormLabel>비밀번호</Login.FormLabel>
              <ContainedInput01
                type="password"
                id="password"
                register={props.register("password")}
                placeholder="비밀번호를 입력하세요"
                error={props.errorMsg.password !== ""}
              ></ContainedInput01>
              <Login.ErrorMsg>{props.errorMsg.password}</Login.ErrorMsg>
              <Login.checkBox>
                <input type="checkbox"></input>
                <div>로그인 유지하기</div>
              </Login.checkBox>
              <Login.SubmitBtn type="submit">로그인</Login.SubmitBtn>
              <Login.GoogleBtn type="button" onClick={props.onclickSubmit}>
                <img src="/img/login-google.png" /> Google로 시작하기
              </Login.GoogleBtn>
            </Login.Form>
            <Login.SignUp>
              계정이 아직 없으신가요?
              <Login.MoveSignUp>회원가입하기</Login.MoveSignUp>
            </Login.SignUp>
          </Login.LoginBox>
        </Login.Bg>
      </Login.Container>
    </>
  );
}

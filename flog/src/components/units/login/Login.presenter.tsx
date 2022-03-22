import * as Login from "./Login.styles";
import Input01 from "../../commons/inputs/01/index";
import Button01 from "../../commons/buttons/01/index";
export default function LoginUI(props) {
  return (
    <>
      <Login.Container>
        <Login.Bg>
          <Login.LoginBox>
            <h3>flog</h3>
            <Login.Form onSubmit={props.handleSubmit(props.onclickSubmit)}>
              <Login.FormLabel>이메일</Login.FormLabel>
              <Input01
                register={props.register("email")}
                type="text"
                placeholder="이메일을 입력하세요"
              ></Input01>
              <Login.ErrorMsg>
                {props.formState.errors.email?.message}
              </Login.ErrorMsg>

              <Login.FormLabel>비밀번호</Login.FormLabel>
              <Input01
                register={props.register("password")}
                type="password"
                placeholder="비밀번호를 입력하세요"
              ></Input01>
              <Login.ErrorMsg>
                {props.formState.errors.password?.message}
              </Login.ErrorMsg>

              <Login.checkBox>
                <input type="checkbox"></input>
                <div>로그인 유지하기</div>
              </Login.checkBox>
              <Button01
                type="submit"
                contents="로그인"
                onClick={props.onclickSubmit}
              />
              <Button01
                type="button"
                contents="로그인"
                onClick={props.onclickSubmit}
              />
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

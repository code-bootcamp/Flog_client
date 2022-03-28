import OutlinedInput01 from "../../commons/inputs/outlined/01/OutlinedInput01.container";

import * as Signup from "./SignUp.styles";

export default function SignupUI(props) {
  return (
    <Signup.Container>
      <Signup.Bg>
        <Signup.LoginBox>
          <h3>회원 가입</h3>
          <Signup.Form onSubmit={props.handleSubmit(props.onclickSubmit)}>
            <Signup.FormLabel>이메일 </Signup.FormLabel>
            <OutlinedInput01
              type="text"
              id="email"
              register={props.register("email")}
              placeholder="이메일을 입력하세요"
              error={props.formState.errors.email?.message}
            ></OutlinedInput01>
            <Signup.ErrorMsg>
              {props.formState.errors.email?.message}
            </Signup.ErrorMsg>

            <Signup.FormLabel>비밀번호</Signup.FormLabel>
            <OutlinedInput01
              type={props.pwdType && "password"}
              id="password"
              register={props.register("password")}
              placeholder="비밀번호를 입력하세요"
              error={props.formState.errors.password?.message}
            ></OutlinedInput01>
            <img src="/img/signUp-icon1.png" onClick={props.pwdToggle} />

            <Signup.ErrorMsg>
              {props.formState.errors.password?.message}
            </Signup.ErrorMsg>

            <Signup.FormLabel>비밀번호 확인</Signup.FormLabel>
            <OutlinedInput01
              type={props.pwdType && "password"}
              id="password2"
              register={props.register("password2")}
              placeholder="비밀번호를 다시 입력하세요"
              error={props.formState.errors.password?.message}
            ></OutlinedInput01>

            <Signup.ErrorMsg>
              {props.formState.errors.password2?.message}
            </Signup.ErrorMsg>

            <Signup.FormLabel>닉네임</Signup.FormLabel>
            <OutlinedInput01
              type="text"
              id="name"
              register={props.register("name")}
              placeholder="닉네임을 입력하세요"
              error={props.formState.errors.name?.message}
            ></OutlinedInput01>
            <Signup.ErrorMsg>
              {props.formState.errors.name?.message}
            </Signup.ErrorMsg>

            <Signup.SubmitBtn>회원가입하기</Signup.SubmitBtn>
          </Signup.Form>
          <Signup.SignUp>
            이미 아이디가 있으신가요?
            <Signup.MoveSignUp onClick={props.moveToPage("/login")}>
              로그인
            </Signup.MoveSignUp>
          </Signup.SignUp>
        </Signup.LoginBox>
      </Signup.Bg>
    </Signup.Container>
  );
}

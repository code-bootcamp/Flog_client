import SignupUI from "./SignUp.presenter";

import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import * as yup from "yup";
import { useRouter } from "next/router";

import { yupResolver } from "@hookform/resolvers/yup";
import { useMoveToPage } from "../../commons/hooks/useMoveToPage";

import { CREATE_USER } from "./SignUp.queries";

const schema = yup.object().shape({
  email: yup
    .string()
    .required("이메일은 필수 입력 사항입니다.")
    .email("이메일 형식이 적합하지 않습니다."),
  password: yup
    .string()
    .required("비밀번호는 필수 입력 사항입니다")
    .matches(
      /^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15}$/,
      "영문자, 숫자, 특수문자 조합으로 8 ~ 15자리로 설정해 주세요."
    ),

  password2: yup.string().equals([yup.ref("password")], "비밀번호가 다릅니다."),
  name: yup.string().required("이름은 필수 입력 사항입니다"),
});
interface FormValues {
  email: string;
  password: string;
  password2: string;
  name: string;
}
export default function Signup() {
  const [pwdType, setPwdType] = useState(true);
  const [modalContents, setModalContents] = useState("");

  const [createUser] = useMutation(CREATE_USER);
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const { moveToPage } = useMoveToPage();
  const router = useRouter();
  const onclickSubmit = async (data: FormValues) => {
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            nickName: data.name,
            email: data.email,
            password: data.password,
            mainCategoryName: "MINE",
          },
        },
      });
      setModalContents("회원가입을 완료하였습니다");
    } catch (error) {
      if (error instanceof Error) {
        setModalContents(error.message);
      }
    }
  };
  const pwdToggle = () => {
    setPwdType((prev) => !prev);
  };
  const onModal = () => {
    setModalContents("");
    router.push("/login");
  };
  return (
    <SignupUI
      register={register}
      handleSubmit={handleSubmit}
      onclickSubmit={onclickSubmit}
      formState={formState}
      pwdType={pwdType}
      pwdToggle={pwdToggle}
      moveToPage={moveToPage}
      onModal={onModal}
      modalContents={modalContents}
    />
  );
}

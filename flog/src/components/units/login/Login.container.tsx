import LoginUI from "./Login.presenter";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";
interface FormValues {
  myEmail?: string;
  myPassword?: string;
}
const schema = yup.object().shape({
  myEmail: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("이메일은 필수 입력 사항입니다."),
  myPassword: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상 입력해주세요")
    .max(15, "비밀번호는 최대 15자리 입니다.")
    .required("비밀번호는 필수 입력 사항입니다"),
});
export default function Login() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const onclickSubmit = (data: FormValues) => {
    console.log(data);
  };
  return (
    <LoginUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onclickSubmit={onclickSubmit}
    />
  );
}

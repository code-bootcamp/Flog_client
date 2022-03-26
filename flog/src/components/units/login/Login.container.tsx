import LoginUI from "./Login.presenter";
import { useForm } from "react-hook-form";
import { LOGIN } from "./Login.queries";
import { useMutation } from "@apollo/client";
import { useState } from "react";

interface FormValues {
  email?: string;
  password?: string;
}

export default function Login() {
  const [errorMsg, setErrorMsg] = useState({
    email: "",
    password: "",
  });
  const [login] = useMutation(LOGIN);
  const { register, handleSubmit, watch } = useForm({
    mode: "onChange",
  });

  const onclickSubmit = async (data: FormValues) => {
    console.log(data);
    try {
      const result = await login({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      console.log(result);
      alert("로그인이 완료되었습니다");
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.includes("이메일")) {
          setErrorMsg({ ...errorMsg, email: error.message });
          resetError(data.email, "email");
        }
        if (error.message.includes("비밀번호")) {
          setErrorMsg({ ...errorMsg, password: error.message });
          resetError(data.email, "password");
        }
      }
    }
  };
  const resetError = (data: string | undefined, section: string) => {
    watch((value) => {
      if (section === "email" && data !== value.email)
        setErrorMsg({ ...errorMsg, email: "" });
      if (section === "password" && data !== value.password)
        setErrorMsg({ ...errorMsg, password: "" });
    });
  };

  return (
    <LoginUI
      register={register}
      handleSubmit={handleSubmit}
      onclickSubmit={onclickSubmit}
      errorMsg={errorMsg}
    />
  );
}

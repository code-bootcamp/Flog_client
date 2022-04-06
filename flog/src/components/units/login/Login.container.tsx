import LoginUI from "./Login.presenter";
import { useForm } from "react-hook-form";
import { useMoveToPage } from "../../commons/hooks/useMoveToPage";

import { LOGIN } from "./Login.queries";
import { useMutation } from "@apollo/client";
import { useState, useContext } from "react";
import { useRouter } from "next/router";
import { GlobalContext } from "../../../../pages/_app";
interface FormValues {
  email?: string;
  password?: string;
}

export default function Login() {
  const { setAccessToken } = useContext(GlobalContext);
  const [errorMsg, setErrorMsg] = useState({
    email: "",
    password: "",
  });
  const [modalContents, setModalContents] = useState("");
  const { moveToPage } = useMoveToPage();
  const router = useRouter();
  const [login] = useMutation(LOGIN);
  const { register, handleSubmit, watch } = useForm({
    mode: "onChange",
  });
  const onclickSubmit = async (data: FormValues) => {
    try {
      const result = await login({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      const token = result.data?.login;
      if (token) {
        // 임시 추가 부분
        if (process.browser) {
          localStorage.setItem("accessToken", token);
        }
        // 원래는 하단 라인만 있으면 됨
        if (setAccessToken) setAccessToken(token);
      }
      setModalContents("로그인에 성공했습니다");
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
  const onModal = () => {
    setModalContents("");
    router.push("/myTrips");
  };
  const nonMember = async () => {
    const result = await login({
      variables: {
        email: "user@u.com",
        password: "user",
      },
    });
    const token = result.data?.login;
    if (token) {
      // 임시 추가 부분
      if (process.browser) {
        localStorage.setItem("accessToken", token);
      }
      // 원래는 하단 라인만 있으면 됨
      if (setAccessToken) setAccessToken(token);
    }
    setModalContents("비회원으로 시작하기");
  };
  if (process.browser) {
    document.addEventListener(
      "keydown",
      function (event) {
        if (event.keyCode === 13) {
          event.preventDefault();
        }
      },
      true
    );
  }

  return (
    <LoginUI
      register={register}
      handleSubmit={handleSubmit}
      onclickSubmit={onclickSubmit}
      errorMsg={errorMsg}
      moveToPage={moveToPage}
      onModal={onModal}
      modalContents={modalContents}
      nonMember={nonMember}
    />
  );
}

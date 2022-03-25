import LoginUI from "./Login.presenter";
import { useForm } from "react-hook-form";
import { LOGIN } from "./Login.queries";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import Alert from "@mui/material/Alert";

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
        <Alert variant="outlined" severity="error">
          dfd
        </Alert>;
        alert(Alert);
      }
    }
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

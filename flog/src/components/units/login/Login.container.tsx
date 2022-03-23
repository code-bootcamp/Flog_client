import LoginUI from "./Login.presenter";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {LOGIN} from "./Login.queries"
import { useMutation } from "@apollo/client";
import { useState } from "react";

interface FormValues {
  email?: string;
  password?: string;
}

export default function Login() {
  const [errorMsg,setErrorMsg] = useState({
    email: "",
    password: ""
  })
  const [login] = useMutation(LOGIN);
  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });
  
  const onclickSubmit = async (data: FormValues) => {
    console.log(data.email);
    console.log(data.password);
    try {
      const result = await login({
        variables: {
          email: data.email,
          password: data.password
        },
      });
      console.log(result)
      alert('로그인이 완료되었습니다')

    } catch (error) {
      if (error instanceof Error) {
        if(error.message.includes('이메일')) setErrorMsg({...errorMsg,email:error.message }) 
        if(error.message.includes('비밀번호')) setErrorMsg({...errorMsg,password:error.message }) 
        
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

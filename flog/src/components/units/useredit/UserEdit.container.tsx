import { useRouter } from "next/router";
import { useRef, ChangeEvent, useState } from "react";
import UserEditUI from "./UserEdit.presenter";
import { UPDATE_USER, FETCH_USER, UPLOAD_FILE } from "./UserEdit.queries";
import { useMutation, useQuery } from "@apollo/client";
import { checkFileValidation } from "../../../commons/utils/checkFileValidation";

export default function UserEdit() {
  const fileUpload = useRef<HTMLInputElement>(null);
  const [uploadProfileImagefile] = useMutation(UPLOAD_FILE);
  const [pwdType, setPwdType] = useState(true);
  const [inputs, setInputs] = useState({
    name: "",
    imgUrl: "",
    email: "",
    password: "",
    number1: "",
    number2: "",
    number3: "",
  });
  const [updateUser] = useMutation(UPDATE_USER);
  const { data } = useQuery(FETCH_USER);
  const router = useRouter();
  const onClickMoveToMyPage = () => {
    router.push("/mypage");
  };

  const onClickFileUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    const isValid = checkFileValidation(file);
    if (!isValid) return;
    try {
      const result = await uploadProfileImagefile({ variables: { file } });
      const fileUrl = result.data?.uploadProfileImagefile;
      setInputs({ ...inputs, imgUrl: fileUrl });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };

  interface AllInputs {
    email?: string;
    nickName?: string;
    url?: string;
    password?: string;
    phoneNumber?: string;
  }
  const onClickSubmit = async () => {
    // console.log(inputs);
    const AllInputs: AllInputs = {};
    if (inputs.email !== "") AllInputs.email = inputs.email;
    if (inputs.name !== "") AllInputs.nickName = inputs.name;
    if (inputs.imgUrl !== "") AllInputs.url = inputs.imgUrl;
    if (inputs.password !== "") AllInputs.password = inputs.password;
    if (inputs.number1 && inputs.number2 && inputs.number3)
      AllInputs.phoneNumber = inputs.number1 + inputs.number2 + inputs.number3;
    try {
      await updateUser({
        variables: {
          updateUserInput: AllInputs,
        },
      });

      alert("개인정보 수정 완료!");
      router.push("/mypage");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
      console.log(AllInputs);
    }
  };
  const pwdToggle = () => {
    setPwdType((prev) => !prev);
  };
  return (
    <UserEditUI
      onClickMoveToMyPage={onClickMoveToMyPage}
      onClickFileUpload={onClickFileUpload}
      onClickSubmit={onClickSubmit}
      fileUpload={fileUpload}
      data={data}
      onChange={onChange}
      inputs={inputs}
      pwdType={pwdType}
      pwdToggle={pwdToggle}
    />
  );
}

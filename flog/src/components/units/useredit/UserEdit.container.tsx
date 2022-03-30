import { useRouter } from "next/router";
import { useRef, ChangeEvent, useState } from "react";
import UserEditUI from "./UserEdit.presenter";
import { UPDATE_USER, FETCH_USER, UPLOAD_FILE } from "./UserEdit.queries";
import { useMutation, useQuery } from "@apollo/client";
import { checkFileValidation } from "../../../commons/utils/checkFileValidation";

// /^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15}$/,
//       "영문자, 숫자, 특수문자 조합으로 8 ~ 15자리로 설정해 주세요."
export default function UserEdit() {
  const fileUpload = useRef<HTMLInputElement>(null);
  const [uploadProfileImagefile] = useMutation(UPLOAD_FILE);

  const [inputs, setInputs] = useState({
    name: "",
    imgUrl: "",
    email: "",
    password1: "",
    password2: "",
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
      alert(error.message);
    }
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };
  const AllInputs = {};
  if (inputs.email) AllInputs.email = inputs.email;
  if (inputs.name) AllInputs.nickName = inputs.name;
  if (inputs.imgUrl) AllInputs.url = inputs.imgUrl;
  if (inputs.password2) AllInputs.password = inputs.password2;
  if (inputs.number1 && inputs.number2 && inputs.number3)
    AllInputs.phoneNumber = inputs.number1 + inputs.number2 + inputs.number3;

  const onClickSubmit = async () => {
    console.log(inputs);
    if (inputs.password1 !== inputs.password2)
      return alert("비밀번호가 같지 않습니다.");
    try {
      const result = await updateUser({
        variables: {
          updateUserInput: AllInputs,
        },
      });

      alert("개인정보 수정 완료!");
    } catch (err) {
      alert(err.message);
    }
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
    />
  );
}

import { useRouter } from "next/router";
import UserEditUI from "./UserEdit.presenter";

export default function UserEdit() {
  const router = useRouter();
  const onClickMoveToMyPage = () => {
    router.push("/mypage");
  };
  const onClickFileUpload = () => {
    alert("파일 첨부");
  };
  const onClickSubmit = () => {
    alert("개인정보 수정 완료!");
  };
  return (
    <UserEditUI
      onClickMoveToMyPage={onClickMoveToMyPage}
      onClickFileUpload={onClickFileUpload}
      onClickSubmit={onClickSubmit}
    />
  );
}

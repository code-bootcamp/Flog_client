import { useRouter } from "next/router";
import MyPageUI from "./MyPage.presenter";

export default function MyPage() {
  const router = useRouter();
  const onClickCoverChange = () => {
    alert("커버 변경 클릭!");
  };
  const onClickPoint = () => {
    alert("충전하기 클릭!");
  };
  const onClickMoveToDetail = (url: string) => () => {
    router.push(url);
  };
  const onClickNoLink = () => {
    alert("준비중입니다.");
  };

  return (
    <MyPageUI
      onClickCoverChange={onClickCoverChange}
      onClickPoint={onClickPoint}
      onClickMoveToDetail={onClickMoveToDetail}
      onClickNoLink={onClickNoLink}
    />
  );
}

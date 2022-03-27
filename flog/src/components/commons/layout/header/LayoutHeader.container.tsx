import { useRouter } from "next/router";
import { useState } from "react";
import LayoutHeaderUI from "./LayoutHeader.presenter";

export default function LayoutHeader() {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const [isLogIn, setIsLogIn] = useState(false);

  const onClickLogo = () => {
    router.push("/main");
  };
  const onClickHamburgerBtn = () => {
    setIsActive((prev) => !prev);
  };
  const onClickMoveToHamburger = (url: string) => () => {
    router.push(url);
    setIsActive((prev) => !prev);
  };

  // 빨간 줄 없애기 위한 임시 함수 (추후 로그인 구현되면 삭제 예정)
  const temp = () => {
    setIsLogIn((prev) => !prev);
  };
  console.log(temp);

  return (
    <LayoutHeaderUI
      onClickLogo={onClickLogo}
      onClickHamburgerBtn={onClickHamburgerBtn}
      onClickMoveToHamburger={onClickMoveToHamburger}
      isActive={isActive}
      isLogIn={isLogIn}
    />
  );
}

import { useState } from "react";
import LayoutHeaderUI from "./LayoutHeader.presenter";

export default function LayoutHeader() {
  const [isActive, setIsActive] = useState(false);
  const onClickLogo = () => {
    alert("Logo 클릭 시 작동하는 함수");
  };
  const onClickHamburgerBtn = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <LayoutHeaderUI
      onClickLogo={onClickLogo}
      onClickHamburgerBtn={onClickHamburgerBtn}
      isActive={isActive}
    />
  );
}

import { useRouter } from "next/router";
import { useContext, useEffect, useRef, useState } from "react";
import LayoutHeaderUI from "./LayoutHeader.presenter";
import { useMoveToPage } from "../../hooks/useMoveToPage/index";
import { GlobalContext } from "../../../../../pages/_app";
import { useMutation } from "@apollo/client";
import { LOG_OUT } from "./LayoutHeader.queries";

export default function LayoutHeader() {
  const { moveToPage } = useMoveToPage();
  const [logout] = useMutation(LOG_OUT);
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const [alertModal, setAlertModal] = useState(false);
  const [modalContents, setModalContents] = useState("");
  const { accessToken } = useContext(GlobalContext);
  const hbgMenuRef = useRef(null);

  const onClickHamburgerBtn = () => {
    setIsActive((prev) => !prev);
  };
  const onClickLogout = () => {
    try {
      logout();
      setAlertModal(true);
      setModalContents("성공적으로 로그아웃 되었습니다.");
      setIsActive((prev) => !prev);
      router.push("/main");
    } catch (error) {
      setAlertModal(true);
      if (error instanceof Error) setModalContents(error.message);
    }
  };

  useEffect(() => {
    const onClickOutside = (event: MouseEvent) => {
      if (
        hbgMenuRef.current &&
        !hbgMenuRef.current.contains(event.target as Node)
      ) {
        setIsActive((prev) => !prev);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [hbgMenuRef]);

  const onClickExitAlertModal = () => {
    setAlertModal(false);
  };

  const onClickSubmitAlertModal = () => {
    setAlertModal(false);
  };

  return (
    <LayoutHeaderUI
      moveToPage={moveToPage}
      onClickHamburgerBtn={onClickHamburgerBtn}
      onClickLogout={onClickLogout}
      isActive={isActive}
      accessToken={accessToken}
      onClickExitAlertModal={onClickExitAlertModal}
      onClickSubmitAlertModal={onClickSubmitAlertModal}
      alertModal={alertModal}
      modalContents={modalContents}
      hbgMenuRef={hbgMenuRef}
      router={router}
    />
  );
}

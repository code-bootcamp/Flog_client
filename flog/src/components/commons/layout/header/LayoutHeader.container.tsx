import { useRouter } from "next/router";
import { useContext, useState } from "react";
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

  const onClickHamburgerBtn = () => {
    setIsActive((prev) => !prev);
  };
  const onClickLogout = () => {
    try {
      // logout();
      localStorage.removeItem("accessToken");
      setIsActive((prev) => !prev);
      router.push("/main");
    } catch (error) {
      setAlertModal(true);
      if (error instanceof Error) setModalContents(error.message);
    }
  };

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
    />
  );
}

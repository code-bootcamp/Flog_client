import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import LayoutFooterUI from "./LayoutFooter.presenter";
import { ILayoutFooterProps } from "./LayoutFooter.types";

export default function LayoutFooter(props: ILayoutFooterProps) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [alertModal, setAlertModal] = useState(false);
  const [modalContents, setModalContents] = useState("");

  const onClickAlertModal = () => {
    setAlertModal(true);
  };

  const onClickExitAlertModal = () => {
    setAlertModal(false);
  };

  const onClickSubmitAlertModal = () => {
    setAlertModal(false);
  };

  const onClickSiteMap = (url: string) => () => {
    router.push(url);
  };
  const onChangeNewsletterInput = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onClickNewsletterSubmit = () => {
    if (email === "") {
      setAlertModal(true);
      setModalContents("이메일 주소를 입력해주세요!");
      return;
    }
    if (!email.includes("@")) {
      setAlertModal(true);
      setModalContents("올바른 이메일 주소를 입력해주세요!");
      return;
    }
    setAlertModal(true);
    setModalContents("뉴스레터 신청 감사합니다.");
    setEmail("");
  };
  return (
    <LayoutFooterUI
      onClickSiteMap={onClickSiteMap}
      onChangeNewsletterInput={onChangeNewsletterInput}
      onClickNewsletterSubmit={onClickNewsletterSubmit}
      email={email}
      viewport={props.viewport}
      alertModal={alertModal}
      modalContents={modalContents}
      onClickAlertModal={onClickAlertModal}
      onClickExitAlertModal={onClickExitAlertModal}
      onClickSubmitAlertModal={onClickSubmitAlertModal}
    />
  );
}

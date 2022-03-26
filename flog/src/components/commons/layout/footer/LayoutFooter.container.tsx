import { ChangeEvent, useState } from "react";
import LayoutFooterUI from "./LayoutFooter.presenter";

export default function LayoutFooter() {
  const [email, setEmail] = useState("");
  const onClickSiteMap = (url: string) => () => {
    alert(`이 버튼을 클릭하면 '${url}'으로 연결됩니다.`);
  };
  const onChangeNewsletterInput = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onClickNewsletterSubmit = () => {
    if (email === "") {
      alert("이메일 주소를 입력해주세요!");
      return;
    }
    if (!email.includes("@")) {
      alert("올바른 이메일 주소를 입력해주세요!");
      return;
    }
    alert("뉴스레터 신청 감사합니다.");
    setEmail("");
  };
  return (
    <LayoutFooterUI
      onClickSiteMap={onClickSiteMap}
      onChangeNewsletterInput={onChangeNewsletterInput}
      onClickNewsletterSubmit={onClickNewsletterSubmit}
      email={email}
    />
  );
}

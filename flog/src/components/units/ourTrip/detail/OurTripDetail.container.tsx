import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import OurTripDetailUI from "./OurTripDetail.presenter";

export default function OurTripDetail(props) {
  const [modalContents, setModalContents] = useState("");
  const moveRef = useRef(null);
  const d = (index: number) => {
    moveRef.current
      ?.querySelectorAll(`.ql-size-large`)
      .forEach((el) => el.classList.remove("focused"));
    if (
      moveRef.current?.querySelectorAll(`.ql-size-large`)[index] === undefined
    )
      return setModalContents("여행 로그를 작성해주세요");
    moveRef.current?.querySelectorAll(`.ql-size-large`)[index].scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
    moveRef.current
      ?.querySelectorAll(`.ql-size-large`)
      [index].classList.add("focused");
  };
  useEffect(() => {
    if (props.selected?.[2] === undefined) return;

    d(props.selected[2]);
  }, [props.selected]);

  return (
    <OurTripDetailUI
      modalContents={modalContents}
      setModalContents={setModalContents}
      BoardData={props.BoardData}
      index={props.index}
      moveRef={moveRef}
      isShow={props.isShow}
    />
  );
}

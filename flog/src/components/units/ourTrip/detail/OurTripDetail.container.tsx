import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import OurTripDetailUI from "./OurTripDetail.presenter";

export default function OurTripDetail(props) {
  const router = useRouter();

  const moveRef = useRef(null);
  const d = (index: number) => {
    moveRef.current
      ?.querySelectorAll(`.ql-size-large`)
      .forEach((el) => el.classList.remove("focused"));
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
      BoardData={props.BoardData}
      index={props.index}
      moveRef={moveRef}
      isShow={props.isShow}
    />
  );
}

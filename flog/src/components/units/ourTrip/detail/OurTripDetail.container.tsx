import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import OurTripDetailUI from "./OurTripDetail.presenter";

export default function OurTripDetail(props) {
  const router = useRouter();
  
  const moveRef = useRef(null);
  let prevIndex = 0;
  const d = (index: number) => {
    moveRef.current
      ?.querySelectorAll(`.ql-size-large`)
      [prevIndex].classList.remove("focused");
    moveRef.current?.querySelectorAll(`.ql-size-large`)[index].scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
    moveRef.current
      ?.querySelectorAll(`.ql-size-large`)
      [index].classList.add("focused");
    prevIndex = index;
  };
  useEffect(() => {
    if (props.selected.index === -1) return;

    d(props.selected.index);
  }, [props.selected]);


  return <OurTripDetailUI BoardData={props.BoardData} index={props.index} moveRef={moveRef} />;
}

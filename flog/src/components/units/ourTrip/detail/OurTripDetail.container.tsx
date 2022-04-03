import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { DayContents } from "./OurTripDetail.styles";
import OurTripDetailUI from "./OurTripDetail.presenter";
import { FETCH_BOARD, SHARE } from "./OurTripDetail.queries";

export default function OurTripDetail(props) {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      scheduleId: String(router.query.scheduleId),
    },
  });
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

  return <OurTripDetailUI data={data} index={props.index} moveRef={moveRef} />;
}

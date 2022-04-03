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
  const moveRef = [useRef(null),useRef(null),useRef(null),useRef(null)];
  let prevIndex = 0
  const d = (dayIndex: number,index:number) =>{
    moveRef[dayIndex]?.current?.querySelectorAll(`.ql-size-large`)[prevIndex].classList.remove('focused')
    moveRef[dayIndex]?.current?.querySelectorAll(`.ql-size-large`)[index]?.scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
    moveRef[dayIndex]?.current?.querySelectorAll(`.ql-size-large`)[index].classList.add('focused')
    console.log(props.selected)
    prevIndex = index
 
  };
  useEffect(() => {
    if (props.selected.dayIndex === -1) return;

    d(props.selected.dayIndex,props.selected.detailIndex);
  }, [props.selected]);
  useEffect(() => {
    console.log(data)

  },[data])
  return <OurTripDetailUI data={data} moveRef={moveRef}  isMine={props.isMine} isShow={props.isShow}/>;
}

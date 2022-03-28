import { useMemo, useRef, useState } from "react";
import TripWriteLogListUI from "./TripWriteLogList.presenter";
const schedules = [
  [
    { name: "해운대 암소갈비집1", des: "존맛탱! 로컬 맛집 인정" },
    { name: "해운대 암소갈비집2", des: "존맛탱! 로컬 맛집 인정" },
    { name: "해운대 암소갈비집3", des: "존맛탱! 로컬 맛집 인정" },
    { name: "해운대 암소갈비집4", des: "존맛탱! 로컬 맛집 인정" },
    { name: "해운대 암소갈비집5", des: "존맛탱! 로컬 맛집 인정" },
    { name: "해운대 암소갈비집6", des: "존맛탱! 로컬 맛집 인정 " },
    { name: "해운대 암소갈비집7", des: "존맛탱! 로컬 맛집 인정 " },
    { name: "해운대 암소갈비집8", des: "존맛탱! 로컬 맛집 인정 " },
  ],
  [
    { name: "해운대 암소갈비집9", des: "존맛탱! 로컬 맛집 인정" },
    { name: "해운대 암소갈비집10", des: "존맛탱! 로컬 맛집 인정 " },
    { name: "해운대 암소갈비집11", des: "존맛탱! 로컬 맛집 인정 " },
    { name: "해운대 암소갈비집12", des: "존맛탱! 로컬 맛집 인정 " },
  ],
  [
    { name: "해운대 암소갈비집13", des: "존맛탱! 로컬 맛집 인정" },
    { name: "해운대 암소갈비집14", des: "존맛탱! 로컬 맛집 인정 " },
    { name: "해운대 암소갈비집15", des: "존맛탱! 로컬 맛집 인정 " },
    { name: "해운대 암소갈비집16", des: "존맛탱! 로컬 맛집 인정 " },
  ],
];
export default function TripWriteLogList(props) {
  const ArrayLength = schedules.length;
  const [isShow, setIsShow] = useState(new Array(ArrayLength).fill(false));

  const allRef = schedules.map((x) =>
    x.map((el) => useRef<HTMLLinkElement>(null))
  );

  const addElement = (dayIndex, elIndex) => () => {
    allRef[dayIndex][elIndex].current?.click();
  };
  const toggle = (index) => () => {
    const temp = new Array(ArrayLength).fill(false);

    if (isShow[index]) return setIsShow(temp);
    else {
      temp[index] = true;
      setIsShow(temp);
    }
  };
  const moveSroll = (dayIndex, elIndex) => {
    allRef[dayIndex][elIndex].current?.scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  };
  const isMine = false;
  return (
    <TripWriteLogListUI
      schedules={schedules}
      addElement={addElement}
      allRef={allRef}
      isShow={isShow}
      toggle={toggle}
      isEdit={props.isEdit}
      isMine={isMine}
      moveSroll={moveSroll}
    />
  );
}

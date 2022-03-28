import { useQuery } from "@apollo/client";
import { useEffect, useMemo, useRef, useState } from "react";
import TripWriteLogListUI from "./TripWriteLogList.presenter";
import { FETCH_DETAIL_SCHEDULES } from "./TripWriteLogList.queries";
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
  const { data } = useQuery(FETCH_DETAIL_SCHEDULES, {
    variables: {
      scheduleId: "43e52c82-16d9-4e1d-af30-8c1a4cd572fc",
      userId: "ac7ac614-7afb-4e0c-a3e4-afcd3c604d73",
    },
  });
  // const { data: schedule1 } = useQuery(FETCH_DETAIL_SCHEDULE, {
  //   variables: {
  //     scheduleId: "43e52c82-16d9-4e1d-af30-8c1a4cd572fc",
  //     userId: "ac7ac614-7afb-4e0c-a3e4-afcd3c604d73",
  //     day: "1",
  //   },
  // });
  // const { data: schedule2 } = useQuery(FETCH_DETAIL_SCHEDULE, {
  //   variables: {
  //     scheduleId: "43e52c82-16d9-4e1d-af30-8c1a4cd572fc",
  //     userId: "ac7ac614-7afb-4e0c-a3e4-afcd3c604d73",
  //     day: "2",
  //   },
  // });
  // const { data: schedule3 } = useQuery(FETCH_DETAIL_SCHEDULE, {
  //   variables: {
  //     scheduleId: "43e52c82-16d9-4e1d-af30-8c1a4cd572fc",
  //     userId: "ac7ac614-7afb-4e0c-a3e4-afcd3c604d73",
  //     day: "3",
  //   },
  // });

  // useEffect(() => {
  //   schedules[0] = schedule1?.fetchDetailSchedule;
  //   schedules[1] = schedule2?.fetchDetailSchedule;
  //   schedules[2] = schedule3?.fetchDetailSchedule;
  //   console.log(schedule1);
  // }, [schedule1, schedule2, schedule3]);

  // useEffect(() => {
  //   console.log(schedule1);
  // }, [schedule1]);
  useEffect(() => {
    if (!data) return;
    console.log(schedules);
  }, [schedules]);

  // data?.fetchDetailSchedules?.forEach((el, index) => {
  //   if (el.day === "1") return schedules[0].push(el);
  //   if (el.day === "2") return schedules[1].push(el);
  //   if (el.day === "3") return schedules[2].push(el);
  // });

  const allRef = schedules.map((x) =>
    x.map((el) => useRef<HTMLLinkElement>(null))
  );

  const addElement = (dayIndex, elIndex) => () => {
    allRef[dayIndex][elIndex].current?.click();
    console.log(data);
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

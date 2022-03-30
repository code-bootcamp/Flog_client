import { useQuery } from "@apollo/client";
import { useEffect, useMemo, useRef, useState } from "react";
import TripWriteLogListUI from "./TripWriteLogList.presenter";
import {
  FETCH_DETAIL_SCHEDULES,
  FETCH_DETAIL_SCHEDULE,
} from "./TripWriteLogList.queries";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
// const schedules = [
//   [
//     { name: "해운대 암소갈비집1", des: "존맛탱! 로컬 맛집 인정" },
//     { name: "해운대 암소갈비집2", des: "존맛탱! 로컬 맛집 인정" },
//     { name: "해운대 암소갈비집3", des: "존맛탱! 로컬 맛집 인정" },
//     { name: "해운대 암소갈비집4", des: "존맛탱! 로컬 맛집 인정" },
//     { name: "해운대 암소갈비집5", des: "존맛탱! 로컬 맛집 인정" },
//     { name: "해운대 암소갈비집6", des: "존맛탱! 로컬 맛집 인정 " },
//     { name: "해운대 암소갈비집7", des: "존맛탱! 로컬 맛집 인정 " },
//     { name: "해운대 암소갈비집8", des: "존맛탱! 로컬 맛집 인정 " },
//   ],
//   [
//     { name: "해운대 암소갈비집9", des: "존맛탱! 로컬 맛집 인정" },
//     { name: "해운대 암소갈비집10", des: "존맛탱! 로컬 맛집 인정 " },
//     { name: "해운대 암소갈비집11", des: "존맛탱! 로컬 맛집 인정 " },
//     { name: "해운대 암소갈비집12", des: "존맛탱! 로컬 맛집 인정 " },
//   ],
//   [
//     { name: "해운대 암소갈비집13", des: "존맛탱! 로컬 맛집 인정" },
//     { name: "해운대 암소갈비집14", des: "존맛탱! 로컬 맛집 인정 " },
//     { name: "해운대 암소갈비집15", des: "존맛탱! 로컬 맛집 인정 " },
//     { name: "해운대 암소갈비집16", des: "존맛탱! 로컬 맛집 인정 " },
//   ],
// ];
// const data: {
//   fetchDetailSchedules: [
//     {
//       id: "2bebcad2-561f-42fd-8537-627cc3830e10";
//       day: "3";
//       date: "2022.03.01";
//       startTime: "10:00";
//       useTime: "1시간";
//       memo: null;
//       place: "ㄴㄹㅇ";
//     },
//     {
//       id: "5d656209-849d-4954-bcf3-0702f3c59498";
//       day: "2";
//       date: "2022.03.01";
//       startTime: "10:00";
//       useTime: "1시간";
//       memo: null;
//       place: "ㅇㄴㅇ";
//     },
//     {
//       id: "0d4a3ed2-b920-4d1c-a523-e31e0c1d0a61";
//       day: "3";
//       date: "2022.03.01";
//       startTime: "11:00";
//       useTime: "1시간";
//       memo: null;
//       place: "ㄴㄹㅇ";
//     },
//     {
//       id: "36996337-c624-45da-89aa-6c4bb51cb929";
//       day: "3";
//       date: "2022.03.01";
//       startTime: "12:00";
//       useTime: "1시간";
//       memo: null;
//       place: "ㄴㄹㅇ";
//     },
//     {
//       id: "3616649e-c164-4cde-b257-6d292630febb";
//       day: "3";
//       date: "2022.03.01";
//       startTime: "14:00";
//       useTime: "1시간";
//       memo: null;
//       place: "ㄴㄹㅇ";
//     },
//     {
//       id: "02f9e8b7-0790-46c2-bea8-08574525fa33";
//       day: "3";
//       date: "2022.03.01";
//       startTime: "15:00";
//       useTime: "1시간";
//       memo: null;
//       place: "ㄴㅇㄹㄴㅇㄹ";
//     },
//     {
//       id: "36b7dd34-9981-4ad8-9c8f-b94606123977";
//       day: "2";
//       date: "2022.03.01";
//       startTime: "18:00";
//       useTime: "1시간";
//       memo: null;
//       place: "dsxf";
//     },
//     {
//       id: "fbe11cfc-f026-46f4-a607-836c68d95783";
//       day: "1";
//       date: "2022.03.01";
//       startTime: "18:00";
//       useTime: "1시간";
//       memo: null;
//       place: "dsxf";
//     },
//     {
//       id: "bef30a54-ce56-427f-81a9-d8796498eb36";
//       day: "1";
//       date: "2022.03.01";
//       startTime: "19:00";
//       useTime: "1시간";
//       memo: null;
//       place: "dsxf";
//     },
//     {
//       id: "05d0bd7b-91a8-4d6f-a5fc-c71894fc9bba";
//       day: "2";
//       date: "2022.03.01";
//       startTime: "9:00";
//       useTime: "1시간";
//       memo: null;
//       place: "ㄴㄹㅇ";
//     },
//     {
//       id: "bd307fb0-38d7-4b11-afef-fd1bcae9648d";
//       day: "3";
//       date: "2022.03.01";
//       startTime: "9:00";
//       useTime: "1시간";
//       memo: null;
//       place: "ㄴㄹㅇ";
//     }
//   ];
// };
export default function TripWriteLogList(props) {
  const schedule: any[] = [];

  const ArrayLength = schedule.length;
  const { moveToPage } = useMoveToPage();
  const [isShow, setIsShow] = useState([false, false, false, false]);
  // const { data } = useQuery(FETCH_DETAIL_SCHEDULES, {
  //   variables: {
  //     scheduleId: "a88f3037-bb3e-4546-b9c0-c8f9d91e86d3",
  //     userId: "e8f8c408-2f06-4daa-9c1a-75d52dff1e8d",
  //   },
  // });

  const { data: schedule1 } = useQuery(FETCH_DETAIL_SCHEDULE, {
    variables: {
      scheduleId: "7dc11309-81a2-4c02-8d89-dfc8dd3f5572",
      day: "1",
    },
  });
  const { data: schedule2 } = useQuery(FETCH_DETAIL_SCHEDULE, {
    variables: {
      scheduleId: "7dc11309-81a2-4c02-8d89-dfc8dd3f5572",
      day: "2",
    },
  });
  const { data: schedule3 } = useQuery(FETCH_DETAIL_SCHEDULE, {
    variables: {
      scheduleId: "7dc11309-81a2-4c02-8d89-dfc8dd3f5572",
      day: "3",
    },
  });
  const { data: schedule4 } = useQuery(FETCH_DETAIL_SCHEDULE, {
    variables: {
      scheduleId: "7dc11309-81a2-4c02-8d89-dfc8dd3f5572",
      day: "4",
    },
  });
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
  const allRef: any[] = [];
  const schedules: any[] = [];

  useEffect(() => {
    console.log(schedules);
  }, [schedules]);

  if (schedule1) {
    // allRef[0] = schedule1?.fetchDetailSchedule?.map((x) =>
    //   useRef<HTMLLinkElement>(null)
    // );
    schedules[0] = schedule1?.fetchDetailSchedule;
  }
  if (schedule2) {
    // allRef[1] = schedule2?.fetchDetailSchedule?.map((x) =>
    // useRef<HTMLLinkElement>(null)
    // );
    schedules[1] = schedule2?.fetchDetailSchedule;
  }
  if (schedule3) {
    // allRef[2] = schedule3?.fetchDetailSchedule?.map((x) =>
    //   useRef<HTMLLinkElement>(null)
    // );
    schedules[2] = schedule3?.fetchDetailSchedule;
  }
  if (schedule4) {
    // allRef[3] = schedule4?.fetchDetailSchedule?.map((x) =>
    //   useRef<HTMLLinkElement>(null)
    // );
    schedules[3] = schedule4?.fetchDetailSchedule;
  }

  const addElement = (dayIndex: any, elIndex: any) => () => {
    console.log(dayIndex, elIndex);
    switch (dayIndex) {
      case 0:
        allRef1?.[elIndex].current?.click();
        break;
      case 1:
        allRef2?.[elIndex].current?.click();
        break;
      case 2:
        allRef3?.[elIndex].current?.click();
        break;
      case 3:
        allRef4?.[elIndex].current?.click();
        break;
    }
  };
  const toggle = (index: any) => () => {
    const temp = new Array(4).fill(false);

    if (isShow[index]) return setIsShow(temp);
    else {
      temp[index] = true;
      setIsShow(temp);
    }
  };
  const moveScroll = (dayIndex: any, elIndex: any) => {
    allRef[dayIndex][elIndex].current?.scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  };
  const isMine = false;

  return (
    <TripWriteLogListUI
      addElement={addElement}
      isShow={isShow}
      toggle={toggle}
      isEdit={props.isEdit}
      isMine={isMine}
      moveSroll={moveScroll}
      allRef={allRef}
      schedules={schedules}
    />
  );
}

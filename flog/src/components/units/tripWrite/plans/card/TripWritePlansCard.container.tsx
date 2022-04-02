import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { SetStateAction, useEffect, useState } from "react";
import {
  IMutation,
  IMutationCreateDetailScheduleArgs,
  IMutationUpdateDetailScheduleArgs,
} from "../../../../../commons/types/generated/types";
import { FETCH_DETAIL_SCHEDULE } from "../TripWritePlans.queries";
import TripWritePlansCardUI from "./TripWritePlansCard.presenter";
import {
  CREATE_DETAIL_SCHEDULE,
  UPDATE_DETAIL_SCHEDULE,
} from "./TripWritePlansCard.queries";
import { ITripWritePlansCardProps } from "./TripWritePlansCard.types";

export default function TripWritePlansCard(props: ITripWritePlansCardProps) {
  const router = useRouter();
  const [detailScheduleFormModal, setDetailScheduleFormModal] =
    useState<SetStateAction<boolean>>(false);
  const [detailScheduleFormEditModal, setDetailScheduleFormEditModal] =
    useState(false);
  const [content, setContent] = useState([]);
  const [editContent, setEditContent] = useState([]);
  const [createDetailSchedule] = useMutation<
    Pick<IMutation, "createDetailSchedule">,
    IMutationCreateDetailScheduleArgs
  >(CREATE_DETAIL_SCHEDULE);
  const [updateDetailSchedule] = useMutation<
    Pick<IMutation, "updateDetailSchedule">,
    IMutationUpdateDetailScheduleArgs
  >(UPDATE_DETAIL_SCHEDULE);

  useEffect(() => {
    setContent(props.data);
  }, []);

  const onClickDetailScheduleFormModal = () => {
    setDetailScheduleFormModal(true);
  };

  const onClickExitDetailScheduleFormModal = () => {
    setDetailScheduleFormModal(false);
  };

  const onClickExitDetailScheduleFormEditModal = () => {
    setDetailScheduleFormEditModal(false);
  };

  const onClickSubmitDetailScheduleFormModal = async (data: any) => {
    if (
      !data?.place ||
      !data?.startHour.toString() ||
      !data?.takenHour.toString()
    ) {
      alert("안 채워진 내용 있음 !!");
      return;
    }

    try {
      await createDetailSchedule({
        variables: {
          createDetailScheduleInput: {
            day: props.day.toString(),
            date: props.date.toString(),
            startTime: `${data.startHour.toString().padStart(2, "0")}:${
              data.startMinutes
                ? data.startMinutes.toString().padStart(2, "0")
                : "00"
            }`,
            useTime: `${data.takenHour && data.takenHour.toString() + "시간"}${
              data.takenMinutes ? " " + data.takenMinutes.toString() + "분" : ""
            }`,
            place: data.place.toString(),
            memo: data.memo.toString() || "",
          },
          scheduleId: router.query.scheduleId,
        },
      });
      alert("등록 성공~");
      router.reload();
    } catch (error) {
      console.log(error);
    }
    setDetailScheduleFormModal(false);
  };

  const onClickCardContents = (content) => () => {
    setEditContent(content);
    setDetailScheduleFormEditModal(true);
  };

  const onClickUpdateDetailScheduleFormModal = async (
    data: any,
    indexNumber: number
  ) => {
    if (
      !data?.place ||
      !data?.startHour.toString() ||
      !data?.takenHour.toString()
    ) {
      alert("안 채워진 내용 있음 !!");
      return;
    }

    try {
      const result = await updateDetailSchedule({
        variables: {
          updateDetailScheduleInput: {
            day: editContent.day,
            date: editContent.date,
            startTime: `${data.startHour.toString().padStart(2, "0")}:${
              data.startMinutes
                ? data.startMinutes.toString().padStart(2, "0")
                : "00"
            }`,
            useTime: `${data.takenHour && data.takenHour.toString() + "시간"}${
              data.takenMinutes ? " " + data.takenMinutes.toString() + "분" : ""
            }`,
            place: data.place.toString(),
            memo: data.memo.toString() || "",
          },
          detailScheduleId: editContent.id,
        },
      });
      alert("수정 성공~");
      // router.reload();
      // const editContentCard = () => {
      //   const temp = [...content];
      //   const editCardIndex = temp
      //     .map((el, i) => {
      //       return { id: el.id, index: i };
      //     })
      //     .filter((el) => el.id === editContent.id)[0].index;

      //   temp[editCardIndex] = {
      //     __typename: "DetailSchedule",
      //     date: result.data.updateDetailSchedule.date,
      //     day: result.data.updateDetailSchedule.day,
      //     id: result.data.updateDetailSchedule.id,
      //     startTime: `${data.startHour.toString().padStart(2, "0")}:${
      //       data.startMinutes
      //         ? data.startMinutes.toString().padStart(2, "0")
      //         : "00"
      //     }`,
      //     useTime: `${data.takenHour && data.takenHour.toString() + "시간"}${
      //       data.takenMinutes ? " " + data.takenMinutes.toString() + "분" : ""
      //     }`,
      //     place: data.place.toString(),
      //     memo: data.memo.toString() || "",
      //   };

      //   console.log("temp is", temp);
      //   setContent(temp);
      // };
      // editContentCard();
    } catch (error) {
      console.log(error);
    }
    setDetailScheduleFormEditModal(false);
  };

  return (
    <TripWritePlansCardUI
      content={props.data}
      editContent={editContent}
      detailScheduleFormModal={detailScheduleFormModal}
      onClickDetailScheduleFormModal={onClickDetailScheduleFormModal}
      onClickExitDetailScheduleFormModal={onClickExitDetailScheduleFormModal}
      onClickSubmitDetailScheduleFormModal={
        onClickSubmitDetailScheduleFormModal
      }
      detailScheduleFormEditModal={detailScheduleFormEditModal}
      onClickExitDetailScheduleFormEditModal={
        onClickExitDetailScheduleFormEditModal
      }
      onClickUpdateDetailScheduleFormModal={
        onClickUpdateDetailScheduleFormModal
      }
      onClickCardContents={onClickCardContents}
    />
  );
}

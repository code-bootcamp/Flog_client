import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  IMutation,
  IMutationCreateDetailScheduleArgs,
} from "../../../../../commons/types/generated/types";
import { FETCH_DETAIL_SCHEDULE } from "../TripWritePlans.queries";
import TripWritePlansCardUI from "./TripWritePlansCard.presenter";
import { CREATE_DETAIL_SCHEDULE } from "./TripWritePlansCard.queries";

export default function TripWritePlansCard(props) {
  const router = useRouter();
  const [detailScheduleFormModal, setDetailScheduleFormModal] = useState(false);
  const [createDetailSchedule] = useMutation<
    Pick<IMutation, "createDetailSchedule">,
    IMutationCreateDetailScheduleArgs
  >(CREATE_DETAIL_SCHEDULE);

  const onClickDetailScheduleFormModal = () => {
    setDetailScheduleFormModal(true);
  };

  const onClickExitDetailScheduleFormModal = () => {
    setDetailScheduleFormModal(false);
  };

  const onClickSubmitDetailScheduleFormModal = async (data: any) => {
    if (
      !data?.place ||
      !data?.startHour.toString() ||
      !data?.startMinutes.toString() ||
      !data?.takenHour.toString() ||
      !data?.takenMinutes.toString()
    ) {
      alert("안 채워진 내용 있음 !!");
      return;
    }

    const CreateDetailScheduleInput = {
      date: props.date,
      day: props.day.toString(),
      place: data.place,
      startTime: `${data.startHour
        .toString()
        .padStart(2, "0")}:${data.startMinutes.toString().padStart(2, "0")}`,
      useTime: `${data.takenHour && data.takenHour + "시간"} ${
        data.takenMinutes && data.takenMinutes + "분"
      }`,
      memo: data.memo || "",
    };

    try {
      const result = await createDetailSchedule({
        variables: {
          createDetailScheduleInput: CreateDetailScheduleInput,
          scheduleId: router.query.scheduleId,
        },
        // refetchQueries: [
        //   {
        //     query: FETCH_DETAIL_SCHEDULE,
        //     variables: {
        //       scheduleId: router.query.scheduleId,
        //       day: CreateDetailScheduleInput.day,
        //     },
        //   },
        // ],
      });
      alert("등록 성공~");
      router.reload();
    } catch (error) {
      console.log(error);
    }
    setDetailScheduleFormModal(false);
  };

  return (
    <TripWritePlansCardUI
      content={props.content}
      detailScheduleFormModal={detailScheduleFormModal}
      onClickDetailScheduleFormModal={onClickDetailScheduleFormModal}
      onClickExitDetailScheduleFormModal={onClickExitDetailScheduleFormModal}
      onClickSubmitDetailScheduleFormModal={
        onClickSubmitDetailScheduleFormModal
      }
    />
  );
}

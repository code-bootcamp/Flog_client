import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { SetStateAction, useState } from "react";
import { IMutation } from "../../../../../commons/types/generated/types";
import TripWritePlansCardUI from "./TripWritePlansCard.presenter";
import { CREATE_DETAIL_SCHEDULE } from "./TripWritePlansCard.queries";
import { ITripWritePlansCardProps } from "./TripWritePlansCard.types";

export default function TripWritePlansCard(props: ITripWritePlansCardProps) {
  const router = useRouter();
  const [detailScheduleFormModal, setDetailScheduleFormModal] =
    useState<SetStateAction<boolean>>(false);
  const [createDetailSchedule] = useMutation<
    Pick<IMutation, "createDetailSchedule">
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

    interface ICreateDetailScheduleVariables {
      createDetailScheduleInput: {
        date: string;
        day: string;
        place: string;
        startTime: string;
        useTime: string;
        memo: string;
      };
      scheduleId: string | string[];
    }

    const createDetailScheduleVariables: ICreateDetailScheduleVariables = {
      createDetailScheduleInput: CreateDetailScheduleInput,
      scheduleId: router.query.scheduleId || "",
    };

    try {
      await createDetailSchedule({
        variables: {
          createDetailScheduleVariables,
        },
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

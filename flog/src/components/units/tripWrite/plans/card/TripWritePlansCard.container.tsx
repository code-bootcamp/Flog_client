import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { SetStateAction, useEffect, useState } from "react";
import {
  IMutation,
  IMutationCreateDetailScheduleArgs,
  IMutationUpdateDetailScheduleArgs,
} from "../../../../../commons/types/generated/types";
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
  const [editContent, setEditContent] = useState([]);
  const [alertModal, setAlertModal] = useState(false);
  const [modalContents, setModalContents] = useState("");

  const onClickExitAlertModal = () => {
    setAlertModal(false);
  };

  const onClickSubmitAlertModal = () => {
    setAlertModal(false);
  };

  const [createDetailSchedule] = useMutation<
    Pick<IMutation, "createDetailSchedule">,
    IMutationCreateDetailScheduleArgs
  >(CREATE_DETAIL_SCHEDULE);
  const [updateDetailSchedule] = useMutation<
    Pick<IMutation, "updateDetailSchedule">,
    IMutationUpdateDetailScheduleArgs
  >(UPDATE_DETAIL_SCHEDULE);

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
    if (!data?.place || !data?.startHour || !data?.takenHour) {
      setModalContents(
        "장소, 시작시간, 소요시간이 모두 입력되었는지 확인해주세요."
      );
      setAlertModal(true);
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
      setModalContents("일정이 등록되었습니다.");
      setAlertModal(true);
      router.reload();
    } catch (error) {
      setModalContents(error.message);
      setAlertModal(true);
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
    if (!data?.place || !data?.startHour || !data?.takenHour) {
      setModalContents(
        "장소, 시작시간, 소요시간이 모두 입력되었는지 확인해주세요."
      );
      setAlertModal(true);
      return;
    }

    try {
      await updateDetailSchedule({
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
      setModalContents("일정이 수정되었습니다.");
      setAlertModal(true);
      router.reload();
    } catch (error) {
      setModalContents(error.message);
      setAlertModal(true);
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
      alertModal={alertModal}
      modalContents={modalContents}
      onClickExitAlertModal={onClickExitAlertModal}
      onClickSubmitAlertModal={onClickSubmitAlertModal}
    />
  );
}

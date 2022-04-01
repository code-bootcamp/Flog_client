import { useMutation } from "@apollo/client";
import { useState } from "react";
import ContainedButton01 from "../../../buttons/contained/01/ContainedButton01.container";
import MyDatePicker from "../../../datePickers/DatePicker.container";
import Dropdown02 from "../../../dropdowns/02/Dropdown02.container";
import Dropdown03 from "../../../dropdowns/03/Dropdown03.container";
import OutlinedInput01 from "../../../inputs/outlined/01/OutlinedInput01.container";
import MapModal from "../../map/MapModal.container";
import { CREATE_SCHEDULE } from "./MainSchedule.queries";
import { changeDatetimeToString } from "../../../../../commons/utils/getDate";
import * as M from "./MainSchedule.styles";
import { useRouter } from "next/router";
import { INewTripScheduleModal } from "./MainSchedule.types";
import Alert from "../../alert/Alert.container";
export default function NewTripScheduleModal(props: INewTripScheduleModal) {
  const [mapModal, setMapModal] = useState(true);
  const [showModal, setShowModal] = useState("");

  const [createSchedule] = useMutation(CREATE_SCHEDULE);
  const [inputs, setInputs] = useState({
    title: "",
    theme: "",
    people: "",
    startDate: "",
    endDate: "",
    doName: "",
    cityName: "",
  });

  const router = useRouter();
  const onClickMapModal = () => {
    setTimeout(() => setMapModal((prev) => !prev), 500);
  };
  const getDateList = (startDate: Date, endDate: Date) => {
    const diffDate = startDate.getTime() - endDate.getTime();
    const dateDays = Math.abs(diffDate / (1000 * 3600 * 24));
    const currDate = startDate;
    const dateList = [];
    for (let i = 0; i < dateDays; i++) {
      dateList.push(changeDatetimeToString(currDate));
      currDate.setDate(currDate.getDate() + 1);
    }
    dateList.push(changeDatetimeToString(currDate));
    return dateList.join(",");
  };
  const onClickSubmit = async () => {
    try {
      const result = await createSchedule({
        variables: {
          createScheduleInput: {
            title: inputs.title,
            location: inputs.doName + inputs.cityName,
            // typescript-ignore
            startDate: changeDatetimeToString(inputs.startDate),
            endDate: changeDatetimeToString(inputs.endDate),
            numberPeople: inputs.people,
            hashtag: inputs.theme,
            mainCategoryId: "",
            tripdates: getDateList(inputs.startDate, inputs.endDate),
          },
        },
      });
      const scheduleId = result?.data?.createSchedule.id;
      setShowModal(scheduleId);
      router.push(`/myTrips/${scheduleId}/plans`);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };
  const closeMapModal = () => {
    props.onClickNewScheduleModal();
    router.push(`/myTrips/${showModal}/plans`);
    setShowModal("");
  };
  return (
    <>
      {showModal && (
        <Alert
          contents="일정 생성이 완료되었습니다."
          onClickExit={closeMapModal}
          onClickSubmit={closeMapModal}
        />
      )}
      {mapModal ? (
        <MapModal
          onClickExit={props.onClickNewScheduleModal}
          onClickSubmit={onClickMapModal}
          inputs={inputs}
          setInputs={setInputs}
        />
      ) : (
        <M.Container>
          <M.ModalWrapper>
            <M.Modal>
              <M.Exit>
                <img
                  src="/img/icon-modal-exit.svg"
                  alt="나가기버튼"
                  onClick={props.onClickNewScheduleModal}
                />
              </M.Exit>
              <M.Contents>
                <M.Title>신규 일정 생성</M.Title>
                <M.Wrap>
                  <M.Label>제목</M.Label>
                  <OutlinedInput01
                    placeholder="제목을 입력하세요."
                    type="text"
                    onChange={(event) => {
                      setInputs({
                        ...inputs,
                        title: event.target.value,
                      });
                    }}
                  />
                </M.Wrap>

                <M.Wrap>
                  <M.Label>기간</M.Label>
                  <MyDatePicker inputs={inputs} setInputs={setInputs} />
                </M.Wrap>

                <M.Wrap>
                  <M.Label>테마</M.Label>

                  <Dropdown02 inputs={inputs} setInputs={setInputs} />
                </M.Wrap>

                <M.Wrap>
                  <M.Label>인원</M.Label>
                  <Dropdown03 inputs={inputs} setInputs={setInputs} />
                </M.Wrap>
              </M.Contents>
              <ContainedButton01
                content="생성하기"
                size="large"
                onClick={onClickSubmit}
                disabled={
                  !(
                    inputs.title &&
                    inputs.startDate &&
                    inputs.endDate &&
                    inputs.theme &&
                    inputs.people
                  )
                }
              />
            </M.Modal>
          </M.ModalWrapper>
        </M.Container>
      )}
    </>
  );
}

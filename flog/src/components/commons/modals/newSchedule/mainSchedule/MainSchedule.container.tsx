import { useMutation } from "@apollo/client";
import { useState } from "react";
import ContainedButton01 from "../../../buttons/contained/01/ContainedButton01.container";
import MyDatePicker from "../../../datePickers/DatePicker.container";
import Dropdown02 from "../../../dropdowns/02/Dropdown02.container";
import Dropdown03 from "../../../dropdowns/03/Dropdown03.container";
import OutlinedInput01 from "../../../inputs/outlined/01/OutlinedInput01.container";
import MapModal from "../../map/MapModal.container";
import { CREATE_SCHEDULE } from "./MainSchedule.queries";
import * as M from "./MainSchedule.styles";

export default function NewTripScheduleModal(props) {
  const [mapModal, setMapModal] = useState(true);

  const [createSchedule] = useMutation(CREATE_SCHEDULE);
  const [inputs, setInputs] = useState({
    title: "",
    theme: "",
    people: "",
    startDate: "",
    endDate: "",
  });
  const [location, setLocation] = useState({ doName: "", cityName: "" });

  const onClickMapModal = () => {
    setTimeout(() => setMapModal((prev) => !prev), 500);
  };
  const onClickSubmit = async () => {
    console.log(inputs);
    console.log(inputs.startDate.getMonth());
    console.log(inputs.startDate.getFullYear());
    // try {
    //   const result = await createSchedule({
    //     variables: {
    //       createScheduleInput: {
    //         title: inputs.title,
    //         location: inputs.doName + inputs.cityName,
    //         startDate: inputs.startDate.slice(0, 12),
    //         endDate: inputs.endDate.slice(0, 12),
    //         numberPeople: inputs.people,
    //         hashtag: inputs.theme,
    //         mainCategoryId: "",
    //       },
    //     },
    //   });
    //   console.log(result);
    // } catch (error) {
    //   if (error instanceof Error) {
    //     alert(error.message);
    //   }
    // }
  };

  return (
    <>
      {mapModal ? (
        <MapModal
          onClickExit={props.onClickNewScheduleModal}
          onClickSubmit={onClickMapModal}
          inputs={inputs}
          setInputs={setInputs}
          setLocation={setLocation}
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
                    inputs.theme &&
                    inputs.theme &&
                    inputs.endDate &&
                    inputs.startDate
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

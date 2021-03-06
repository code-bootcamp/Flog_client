import OutlinedInput01 from "../../inputs/outlined/01/OutlinedInput01.container";
import * as M from "./DetailScheduleFormEdit.styles";
import ContainedButton01 from "../../buttons/contained/01/ContainedButton01.container";
import Dropdown06 from "../../dropdowns/06-start-hour/Dropdown06.container";
import Dropdown05 from "../../dropdowns/05-start-minutes/Dropdown05.container";
import Dropdown07 from "../../dropdowns/07-taken-hour/Dropdown07.container";
import Dropdown08 from "../../dropdowns/08-taken-minutes/Dropdown08.container";
import { FormEventHandler } from "react";
interface IDetailScheduleFormEditUIProps {
  onClickExit: () => void;
  onClickSubmit: () => void;
  register: any;
  handleSubmit: (el: any) => FormEventHandler<HTMLFormElement> | undefined;
  setValue: any;
  content?: any;
}
export default function DetailScheduleFormEditUI(
  props: IDetailScheduleFormEditUIProps
) {
  return (
    <M.Container>
      <M.ModalWrapper>
        <M.Modal>
          <M.Head>
            <M.Exit>
              <img
                src="/img/icon-modal-exit.svg"
                alt="나가기버튼"
                onClick={props.onClickExit}
              />
            </M.Exit>
            <M.Title>세부 일정 수정</M.Title>
          </M.Head>

          <M.Form onSubmit={props.handleSubmit(props.onClickSubmit)}>
            <M.Contents>
              <M.Wrap>
                <M.Label>장소</M.Label>
                <OutlinedInput01
                  placeholder="장소를 입력하세요"
                  type="text"
                  register={props.register("place")}
                  defaultValue={props.editContent?.place}
                />
              </M.Wrap>
              <M.TimeInputWrap>
                <M.Wrap className="start-hour">
                  <M.Label>시작</M.Label>
                  <Dropdown06
                    setValue={props.setValue}
                    defaultValue={Number(
                      props.editContent?.startTime.slice(0, 2)
                    )}
                  />
                </M.Wrap>
                <M.Wrap className="start-minutes">
                  <Dropdown05
                    setValue={props.setValue}
                    defaultValue={Number(
                      props.editContent?.startTime.slice(3, 5)
                    )}
                  />
                </M.Wrap>
              </M.TimeInputWrap>
              <M.TimeInputWrap>
                <M.Wrap className="taken-hour">
                  <M.Label>소요</M.Label>
                  <Dropdown07
                    setValue={props.setValue}
                    defaultValue={Number(
                      props.editContent?.useTime.split("시간")[0]
                    )}
                  />
                </M.Wrap>
                <M.Wrap className="taken-minutes">
                  <Dropdown08
                    setValue={props.setValue}
                    defaultValue={
                      props.editContent?.useTime.includes("시간")
                        ? Number(
                            props.editContent?.useTime
                              .split("시간")[1]
                              .replace("분", "")
                          )
                        : Number(props.editContent?.useTime.replace("분", ""))
                    }
                  />
                </M.Wrap>
              </M.TimeInputWrap>
              <M.Wrap className="memo">
                <M.Label style={{ visibility: "hidden" }}>메모</M.Label>
                <OutlinedInput01
                  placeholder="(선택) 메모를 입력해주세요"
                  type="text"
                  register={props.register("memo")}
                  version="memo"
                  defaultValue={props.editContent?.memo}
                />
              </M.Wrap>
            </M.Contents>
            <ContainedButton01 content="수정하기" size="large" type="submit" />
          </M.Form>
        </M.Modal>
      </M.ModalWrapper>
    </M.Container>
  );
}

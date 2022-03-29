import OutlinedInput01 from "../../inputs/outlined/01/OutlinedInput01.container";
import * as M from "./DetailScheduleForm.styles";
import ContainedButton01 from "../../buttons/contained/01/ContainedButton01.container";

export default function DetailScheduleFormUI(props) {
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
            <M.Title>세부 일정 생성</M.Title>
          </M.Head>

          <M.Form onSubmit={props.handleSubmit(props.onClickSubmit)}>
            <M.Contents>
              <M.Wrap>
                <M.Label>장소</M.Label>
                <OutlinedInput01
                  placeholder="장소를 입력하세요"
                  type="text"
                  register={props.register("place")}
                />
              </M.Wrap>
              <M.TimeInputWrap>
                <M.Wrap>
                  <M.Label>시작</M.Label>
                  <OutlinedInput01
                    placeholder="시"
                    type="number"
                    register={props.register("startHour")}
                    version="time"
                  />
                </M.Wrap>
                <M.Wrap>
                  <OutlinedInput01
                    placeholder="분"
                    type="number"
                    register={props.register("startMinutes")}
                    version="time"
                  />
                </M.Wrap>
              </M.TimeInputWrap>
              <M.TimeInputWrap>
                <M.Wrap>
                  <M.Label>소요</M.Label>
                  <OutlinedInput01
                    placeholder="시"
                    type="number"
                    register={props.register("takenHour")}
                    version="time"
                  />
                </M.Wrap>
                <M.Wrap>
                  <OutlinedInput01
                    placeholder="분"
                    type="number"
                    register={props.register("takenMinutes")}
                    version="time"
                  />
                </M.Wrap>
              </M.TimeInputWrap>

              <M.Wrap>
                <M.Label style={{ visibility: "hidden" }}>메모</M.Label>
                <OutlinedInput01
                  placeholder="(선택) 메모를 입력해주세요"
                  type="text"
                  register={props.register("memo")}
                  version="memo"
                />
              </M.Wrap>
            </M.Contents>
            <ContainedButton01 content="생성하기" size="large" type="submit" />
          </M.Form>
        </M.Modal>
      </M.ModalWrapper>
    </M.Container>
  );
}

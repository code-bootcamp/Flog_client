import OutlinedInput01 from "../../inputs/outlined/01/OutlinedInput01.container";
import * as M from "./DetailScheduleForm.styles";
import ContainedButton01 from "../../buttons/contained/01/ContainedButton01.container";
import Dropdown06 from "../../dropdowns/06-start-hour/Dropdown06.container";
import Dropdown05 from "../../dropdowns/05-start-minutes/Dropdown05.container";
import Dropdown07 from "../../dropdowns/07-taken-hour/Dropdown07.container";
import Dropdown08 from "../../dropdowns/08-taken-minutes /Dropdown08.container";

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
                <M.Wrap className="start-hour">
                  <M.Label>시작</M.Label>
                  <Dropdown06 setValue={props.setValue} />
                </M.Wrap>
                <M.Wrap className="start-minutes">
                  <Dropdown05 setValue={props.setValue} />
                </M.Wrap>
              </M.TimeInputWrap>
              <M.TimeInputWrap>
                <M.Wrap className="taken-hour">
                  <M.Label>소요</M.Label>
                  <Dropdown07 setValue={props.setValue} />
                </M.Wrap>
                <M.Wrap className="taken-minutes">
                  <Dropdown08 setValue={props.setValue} />
                </M.Wrap>
              </M.TimeInputWrap>
              <M.Wrap className="memo">
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

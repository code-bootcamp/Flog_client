import ContainedButton01 from "../../../buttons/contained/01/ContainedButton01.container";
import OutlinedInput01 from "../../../inputs/outlined/01/OutlinedInput01.container";
import * as M from "./DetailBudget.styles";
import { IDetailBudgetUIProps } from "./DetailBudget.types";

export default function DetailBudgetUI(props: IDetailBudgetUIProps) {
  return (
    <M.Container>
      <M.ModalWrapper>
        <M.Modal>
          <M.Exit>
            <img
              src="/img/icon-modal-exit.svg"
              alt="나가기버튼"
              onClick={props.onClickExit}
            />
          </M.Exit>
          <M.Contents>
            <M.Title>여행 준비</M.Title>
            <M.Wrap>
              <M.CategoryWrap>
                {props.TRIP_CATEGORY.map((el, index) => (
                  <>
                    <M.Category isSelect={props.isSelect[index]}>
                      <M.CategoryIcon>
                        <img
                          src={`/img/icon-budget-category-${el.num}.svg`}
                          alt="카테고리"
                          onClick={props.onClickCategory(index)}
                        />
                      </M.CategoryIcon>
                      <M.CategoryLabel>{el.label}</M.CategoryLabel>
                    </M.Category>
                  </>
                ))}
              </M.CategoryWrap>
            </M.Wrap>
            <M.Wrap>
              <M.Label>내용</M.Label>
              <OutlinedInput01
                placeholder="내용을 입력하세요."
                type="text"
                onChange={props.onChangeContents}
              />
            </M.Wrap>

            <M.Wrap>
              <M.Label>금액</M.Label>
              <OutlinedInput01
                placeholder="금액을 입력하세요."
                type="number"
                onChange={props.onChangeBudget}
              />
            </M.Wrap>

            <M.Wrap>
              <M.Label>시간</M.Label>
              <M.TimeInputWrap>
                <M.TimeInput
                  type="number"
                  placeholder="시"
                  onChange={props.onChangeStartHour}
                ></M.TimeInput>

                <M.TimeInput
                  type="number"
                  placeholder="분"
                  onChange={props.onChangeStartMinutes}
                ></M.TimeInput>
              </M.TimeInputWrap>
            </M.Wrap>

            <M.Wrap>
              <M.Label style={{ visibility: "hidden" }}>메모</M.Label>
              <M.MemoInput
                placeholder="(선택) 메모를 입력해주세요."
                onChange={props.onChangeMemo}
              ></M.MemoInput>
            </M.Wrap>
          </M.Contents>

          <ContainedButton01
            content="저장하기"
            size="large"
            onClick={props.onClickSubmit}
            disabled={!props.isButtonActive}
          />
        </M.Modal>
      </M.ModalWrapper>
    </M.Container>
  );
}

import OutlinedInput01 from "../../inputs/outlined/01/OutlinedInput01.container";
import * as M from "../newBudget/detailBudget/DetailBudget.styles";
import OutlinedInput02 from "../../inputs/outlined/02/OutlinedInput02.container";
import ContainedButton01 from "../../buttons/contained/01/ContainedButton01.container";
import { IDetailBudgetFormUIProps } from "./DetailBudgetForm.types";

export default function DetailBudgetFormUI(props) {
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
          <M.Form onSubmit={props.handleSubmit(props.onClickSubmit)}>
            <M.Contents>
              <M.Title>여행 준비</M.Title>
              <M.Wrap>
                <M.CategoryWrap>
                  {props.TRIP_CATEGORY.map((el, index) => (
                    <>
                      <M.Category isSelect={props.isSelect[index]}>
                        <M.CategoryIcon onClick={props.onClickCategory(index)}>
                          <img
                            src={`/img/icon-budget-category-${el.num}.svg`}
                            alt="카테고리"
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
                  register={props.register("contents")}
                />
              </M.Wrap>

              <M.Wrap>
                <M.Label>금액</M.Label>
                <OutlinedInput01
                  placeholder="금액을 입력하세요."
                  type="number"
                  register={props.register("budget")}
                />
              </M.Wrap>
              <M.TimeInputWrap>
                <M.Wrap>
                  <M.Label>시간</M.Label>
                  <OutlinedInput02
                    placeholder="시"
                    type="number"
                    register={props.register("hour")}
                  />
                </M.Wrap>
                <M.Wrap>
                  <OutlinedInput02
                    placeholder="분"
                    type="number"
                    register={props.register("minutes")}
                  />
                </M.Wrap>
              </M.TimeInputWrap>
              <M.Wrap>
                <M.Label style={{ visibility: "hidden" }}>메모</M.Label>
                <OutlinedInput01
                  placeholder="(선택) 메모를 입력해주세요"
                  type="text"
                  register={props.register("memo")}
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

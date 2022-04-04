import OutlinedInput01 from "../../inputs/outlined/01/OutlinedInput01.container";
import * as M from "./DetailBudgetEditForm.styles";
import ContainedButton01 from "../../buttons/contained/01/ContainedButton01.container";
// import { IDetailBudgetFormUIProps } from "./DetailBudgetForm.types";
import {
  FormEventHandler,
  Fragment,
  MouseEventHandler,
  ReactNode,
} from "react";
import { v4 as uuid4 } from "uuid";
interface IDetailBudgetFormUIprops {
  onClickExit: () => void;
  onClickSubmit: () => void;
  onClickCategory: (
    index: number
  ) => MouseEventHandler<HTMLDivElement> | undefined;

  TRIP_CATEGORY: [];
  isSelect: any;
  register: any;
  handleSubmit: (el: any) => FormEventHandler<HTMLFormElement> | undefined;
}
export default function DetailBudgetEditFormUI(
  props: IDetailBudgetFormUIprops
) {
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
              <M.Title>지출 수정</M.Title>
              <M.Wrap>
                <M.CategoryWrap>
                  {props.TRIP_CATEGORY.map(
                    (el: { num: string; label: ReactNode }, index: number) => (
                      <Fragment key={uuid4()}>
                        <M.Category isSelect={props.isSelect[index]}>
                          <M.CategoryIcon
                            onClick={props.onClickCategory(index)}
                          >
                            <img
                              src={`/img/icon-budget-category-${el.num}.svg`}
                              alt="카테고리"
                            />
                          </M.CategoryIcon>
                          <M.CategoryLabel>{el.label}</M.CategoryLabel>
                        </M.Category>
                      </Fragment>
                    )
                  )}
                </M.CategoryWrap>
              </M.Wrap>
              <M.Wrap>
                <M.Label>내용</M.Label>
                <OutlinedInput01
                  placeholder="내용을 입력하세요."
                  type="text"
                  register={props.register("contents")}
                  defaultValue={props.clickContents.context}
                />
              </M.Wrap>

              <M.Wrap>
                <M.Label>금액</M.Label>
                <OutlinedInput01
                  placeholder="금액을 입력하세요."
                  type="number"
                  register={props.register("budget")}
                  defaultValue={props.clickContents.amount}
                />
              </M.Wrap>
              <M.Wrap>
                <M.Label style={{ visibility: "hidden" }}>메모</M.Label>
                <OutlinedInput01
                  placeholder="(선택) 메모를 입력해주세요"
                  type="text"
                  register={props.register("memo")}
                  defaultValue={props.clickContents.memo}
                />
              </M.Wrap>
            </M.Contents>
            <ContainedButton01
              content="수정하기"
              size="large"
              type="submit"
              responsive={true}
            />
          </M.Form>
        </M.Modal>
      </M.ModalWrapper>
    </M.Container>
  );
}

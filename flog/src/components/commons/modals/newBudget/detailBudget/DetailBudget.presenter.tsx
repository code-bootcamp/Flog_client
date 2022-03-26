import { useState } from "react";
import ContainedButton01 from "../../../buttons/contained/01/ContainedButton01.container";
import OutlinedInput01 from "../../../inputs/outlined/01/OutlinedInput01.container";
import * as M from "./DetailBudget.styles";
import { IDetailBudget } from "./DetailBudget.types";

export default function DetailBudget(props: IDetailBudget) {
  const [contents, setContents] = useState("");
  const [budget, setBudget] = useState(0);
  const [startHour, setStartHour] = useState(0);
  const [startMinutes, setStartMinutes] = useState(0);
  const [category, setCategory] = useState("");

  const [memo, setMemo] = useState("");

  const [isButtonActive, setIsButtonActive] = useState(false);

  const [isSelect, setIsSelect] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const onChangeContents = (event) => {
    setContents(event.target.value);
    if (event.target.value && budget) {
      setIsButtonActive(true);
    }
  };

  const onChangeBudget = (event) => {
    setBudget(event.target.value);
    if (event.target.value && contents) {
      setIsButtonActive(true);
    }
  };

  const onChangeStartHour = (event) => {
    setStartHour(event.target.value);
  };

  const onChangeStartMinutes = (event) => {
    setStartMinutes(event.target.value);
  };

  const onChangeMemo = (event) => {
    setMemo(event.target.value);
  };

  const tripCategory = [
    { num: 1, label: "식비" },
    { num: 2, label: "쇼핑" },
    { num: 3, label: "교통" },
    { num: 4, label: "관광" },
    { num: 5, label: "숙박" },
    { num: 6, label: "기타" },
  ];

  const onClickCategory = (index: number) => () => {
    const temp = [false, false, false, false, false, false];
    temp[index] = true;
    setIsSelect([...temp]);
    setCategory(tripCategory[index].label);
  };
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
                {tripCategory.map((el, index) => (
                  <>
                    <M.Category isSelect={isSelect[index]}>
                      <M.CategoryIcon>
                        <img
                          src={`/img/icon-budget-category-${el.num}.svg`}
                          alt="카테고리"
                          onClick={onClickCategory(index)}
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
                onChange={onChangeContents}
              />
            </M.Wrap>

            <M.Wrap>
              <M.Label>금액</M.Label>
              <OutlinedInput01
                placeholder="금액을 입력하세요."
                type="number"
                onChange={onChangeBudget}
              />
            </M.Wrap>

            <M.Wrap>
              <M.Label>시간</M.Label>
              <M.TimeInputWrap>
                <M.TimeInput
                  type="number"
                  placeholder="시"
                  onChange={onChangeStartHour}
                ></M.TimeInput>

                <M.TimeInput
                  type="number"
                  placeholder="분"
                  onChange={onChangeStartMinutes}
                ></M.TimeInput>
              </M.TimeInputWrap>
            </M.Wrap>

            <M.Wrap>
              <M.Label style={{ visibility: "hidden" }}>메모</M.Label>
              <M.MemoInput
                placeholder="(선택) 메모를 입력해주세요."
                onChange={onChangeMemo}
              ></M.MemoInput>
            </M.Wrap>
          </M.Contents>

          <ContainedButton01
            content="저장하기"
            size="large"
            onClick={props.onClickSubmit}
            disabled={!isButtonActive}
          />
        </M.Modal>
      </M.ModalWrapper>
    </M.Container>
  );
}

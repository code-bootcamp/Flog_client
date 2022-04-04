import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as Drop from "./Dropdown04.styles";
export default function Dropdown04() {
  const LIST = ["전체 보기", "제목", "태그"];

  const [isSelect, setIsSelect] = useState(LIST[0]);
  const [isActive, setIsActive] = useState(false);

  const router = useRouter();

  const onClickSelectBtn = () => {
    setIsActive((prev) => !prev);
  };

  const onClickOption = (el: string) => () => {
    setIsSelect(el);
    if (el === "전체 보기") router.push("/ourTrips");
    if (el === "제목") router.push("/ourTrips/titleSearch");
    if (el === "태그") router.push("/ourTrips/tagSearch");
  };

  useEffect(() => {
    if (router.asPath.includes("/tagSearch")) {
      setIsSelect("태그");
    }
    if (router.asPath.includes("/titleSearch")) {
      setIsSelect("제목");
    }
  }, []);

  return (
    <>
      <Drop.SelectButton onClick={onClickSelectBtn}>
        <Drop.Selected>{isSelect}</Drop.Selected>
        <Drop.SelectIcon>
          <img src="/img/icon-modal-dropdown.svg" />
        </Drop.SelectIcon>
        {isActive && (
          <Drop.Option>
            <ul>
              {LIST.map((el) => (
                <li key={el}>
                  <span onClick={onClickOption(el)}>{el}</span>
                </li>
              ))}
            </ul>
          </Drop.Option>
        )}
      </Drop.SelectButton>
    </>
  );
}

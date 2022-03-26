import { Contents, Path, Text } from "./Maps.styles";
import { useEffect, useRef, useState } from "react";
import MapsUI from "./Maps.presenter";
export default function SvgMap() {
  const [doName, setDoName] = useState("");
  const [cityName, setCityName] = useState("");

  const selectDo = (event) => {
    const selected = document.getElementById(event.target.id + "Selected");
    console.log(selected);
    setDoName(event.target.id);
    gsap.to(Contents, 1, {
      display: "none",
      opacity: 0,
    });
    if (selected) {
      gsap.to(selected, 1, {
        display: "block",
        opacity: 1,
      });
    } else console.log("asdf");
  };

  const reset = () => {
    const selected = document.getElementById(doName + "Selected");

    console.log(doName);
    console.log(selected);
    gsap.to(Contents, 1, {
      display: "block",
      opacity: 1,
    });
    if (selected) {
      gsap.to(selected, 1, {
        display: "none",
        opacity: 0,
      });
    }
    setDoName("");
    setCityName("");
  };
  return (
    <MapsUI
      doName={doName}
      cityName={cityName}
      selectDo={selectDo}
      Contents={Contents}
      reset={reset}
      setCityName={setCityName}
    />
  );
}

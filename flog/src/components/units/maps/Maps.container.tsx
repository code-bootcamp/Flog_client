import { Contents, Path, Text } from "./Maps.styles";
import { useEffect, useRef, useState } from "react";
import MapsUI from "./Maps.presenter";

export default function SvgMap(props) {
  // const [doName, setDoName] = useState("");
  // const [cityName, setCityName] = useState("");

  const selectDo = (event) => {
    const selected = document.getElementById(event.target.id + "Selected");

    props.setDoName(event.target.id);
    gsap.to(Contents, 0.3, {
      display: "none",
      opacity: 0,
    });
    if (selected) {
      gsap.to(selected, 0.3, {
        display: "block",
        opacity: 1,
      });
    } else console.log("오류");
  };

  const reset = () => {
    const selected = document.getElementById(props.doName + "Selected");
    gsap.to(Contents, 0.3, {
      display: "block",
      opacity: 1,
    });
    if (selected) {
      gsap.to(selected, 0.3, {
        display: "none",
        opacity: 0,
      });
    }
    props.setDoName("");
    props.setCityName("");
  };
  return (
    <MapsUI
      doName={props.doName}
      cityName={props.cityName}
      selectDo={selectDo}
      Contents={Contents}
      reset={reset}
      setCityName={props.setCityName}
    />
  );
}

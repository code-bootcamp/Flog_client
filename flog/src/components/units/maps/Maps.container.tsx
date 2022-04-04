import { Contents, Path, Text } from "./Maps.styles";
import { useEffect, useRef, useState } from "react";
import MapsUI from "./Maps.presenter";

export default function SvgMap(props) {
  const selectDo = (event) => {
    const selected = document.getElementById(event.target.id + "Selected");

    props.setInputs({
      ...props.inputs,
      doName: event.target.id,
    });
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
    const selected = document.getElementById(props.inputs.doName + "Selected");
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
    props.setInputs({
      ...props.inputs,
      doName: "",
      cityName: "",
    });
  };
  const setCityName = (value) => {
    props.setInputs({
      ...props.inputs,
      cityName: value,
    });
  };
  return (
    <MapsUI
      inputs={props.inputs}
      setCityName={setCityName}
      selectDo={selectDo}
      Contents={Contents}
      reset={reset}
    />
  );
}

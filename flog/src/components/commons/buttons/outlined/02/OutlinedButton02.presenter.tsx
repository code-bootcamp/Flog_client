import * as Contained from "./OutlinedButton02.styles";
import { IOutlinedButton02Props } from "./OutlinedButton02.types";

export default function OutlinedButton02UI(props: IOutlinedButton02Props) {
  return (
    <Contained.Button
      size={props.size}
      className={props.disabled ? "disabled" : ""}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.content}
    </Contained.Button>
  );
}

import * as Contained from "./OutlinedButton03.styles";
import { IOutlinedButton03Props } from "./OutlinedButton03.types";

export default function OutlinedButton03UI(props: IOutlinedButton03Props) {
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

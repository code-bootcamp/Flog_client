import * as Contained from "./OutlinedButton01.styles";
import { IOutlinedButton01Props } from "./OutlinedButton01.types";

export default function OutlinedButton01UI(props: IOutlinedButton01Props) {
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

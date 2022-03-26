import * as Outlined from "./OutlinedButton04.styles";
import { IOutlinedButton04Props } from "./OutlinedButton04.types";

export default function OutlinedButton04UI(props: IOutlinedButton04Props) {
  return (
    <Outlined.Button
      size={props.size}
      className={props.disabled ? "disabled" : ""}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.content}
    </Outlined.Button>
  );
}

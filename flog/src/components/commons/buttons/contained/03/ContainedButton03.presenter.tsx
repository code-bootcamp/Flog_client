import * as Contained from "./ContainedButton03.styles";
import { IContainedButton03UIProps } from "./ContainedButton03.types";

export default function ContainedButton03UI(props: IContainedButton03UIProps) {
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

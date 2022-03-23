import * as Contained from "./ContainedButton02.styles";
import { IContainedButton03UIProps } from "./ContainedButton02.types";

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

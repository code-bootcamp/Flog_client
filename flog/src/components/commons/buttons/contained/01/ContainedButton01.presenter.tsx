import * as Contained from "./ContainedButton01.styles";
import { IContainedButton01UIProps } from "./ContainedButton01.types";

export default function ContainedButton01UI(props: IContainedButton01UIProps) {
  return (
    <Contained.Button
      size={props.size}
      className={props.disabled ? "disabled" : ""}
      disabled={props.disabled}
      onClick={props.onClick}
      type={props.type}
      responsive={props.responsive}
      id={props.id}
    >
      {props.content}
    </Contained.Button>
  );
}

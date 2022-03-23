import { IOutlinedButton03Props } from "./OutlinedButton03.types";
import OutlinedButton03UI from "./OutlinedButton03.presenter";

export default function OutlinedButton03(props: IOutlinedButton03Props) {
  return (
    <OutlinedButton03UI
      content={props.content}
      size={props.size}
      onClick={props.onClick}
      disabled={props.disabled}
    />
  );
}

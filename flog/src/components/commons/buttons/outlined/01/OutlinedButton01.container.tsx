import OutlinedButton01UI from "./OutlinedButton01.presenter";
import { IOutlinedButton01Props } from "./OutlinedButton01.types";

export default function OutlinedButton01(props: IOutlinedButton01Props) {
  return (
    <OutlinedButton01UI
      content={props.content}
      size={props.size}
      onClick={props.onClick}
      disabled={props.disabled}
    />
  );
}

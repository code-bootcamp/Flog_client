import { IOutlinedButton04Props } from "./OutlinedButton04.types";
import OutlinedButton04UI from "./OutlinedButton04.presenter";

export default function OutlinedButton04(props: IOutlinedButton04Props) {
  return (
    <OutlinedButton04UI
      content={props.content}
      size={props.size}
      onClick={props.onClick}
      disabled={props.disabled}
    />
  );
}

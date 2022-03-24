import { IOutlinedButton02Props } from "./OutlinedButton02.types";
import OutlinedButton02UI from "./OutlinedButton02.presenter";

export default function OutlinedButton02(props: IOutlinedButton02Props) {
  return (
    <OutlinedButton02UI
      content={props.content}
      size={props.size}
      onClick={props.onClick}
      disabled={props.disabled}
    />
  );
}

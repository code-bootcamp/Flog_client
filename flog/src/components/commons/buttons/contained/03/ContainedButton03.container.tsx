import ContainedButton03UI from "./ContainedButton03.presenter";
import { IContainedButton03Props } from "./ContainedButton03.types";

export default function ContainedButton03(props: IContainedButton03Props) {
  return (
    <ContainedButton03UI
      content={props.content}
      size={props.size}
      onClick={props.onClick}
      disabled={props.disabled}
    />
  );
}

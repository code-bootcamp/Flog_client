import ContainedButton02UI from "./ContainedButton02.presenter";
import { IContainedButton02Props } from "./ContainedButton02.types";

export default function ContainedButton02(props: IContainedButton02Props) {
  return (
    <ContainedButton02UI
      content={props.content}
      size={props.size}
      onClick={props.onClick}
      disabled={props.disabled}
    />
  );
}

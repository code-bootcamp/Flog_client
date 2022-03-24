import * as Input from "./WithIconInput01.styles";
import { IWithIconInput01UIprops } from "./WithIconInput01.types";

export default function WithIconInput01UI(props: IWithIconInput01UIprops) {
  return (
    <Input.Container>
      <Input.Input01
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        id={props.id}
        type={props.type}
        {...props.register}
        autoFocus
      />
      <Input.Icon className="icon">
        <img src={props.iconUrl} />
      </Input.Icon>
    </Input.Container>
  );
}

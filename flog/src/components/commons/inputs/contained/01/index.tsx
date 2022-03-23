import styled from "@emotion/styled";
interface IInput01Props {
  placeholder: string;
  type: string;
  register?: unknown;
  id: string;
}
export default function Input01(props: IInput01Props) {
  const Input01 = styled.input`
    width: 338px;
    height: 56px;
    border-radius: 20px;
    padding: 0 24px;
    color: #a9a9a9;
    border: 1px solid #A9A9A9;
    font-size: 16px;
    :hover {
      color: #cacaca;
      border-color: #D1EAE1;
    }
    :focus {
      border: 1px solid  #58BD97;
      outline: none;
      color: #2C3131;
    }
    
    
  `;
  return (
    <Input01
      placeholder={props.placeholder}
      id={props.id}
      type={props.type}
      {...props.register}
      autoFocus
    />
  );
}

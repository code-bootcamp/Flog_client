import styled from "@emotion/styled";
interface IInput01Props {
  placeholder: string;
  type: string;
  register: unknown;
}
export default function Input01(props: IInput01Props) {
  const Input01 = styled.input`
    width: 338px;
    height: 56px;
    border-radius: 20px;
    padding-left: 24px;
    color: #a9a9a9;
    :hover {
      color: #cacaca;
    }
    margin-bottom: 18px;
  `;
  return (
    <Input01
      placeholder={props.placeholder}
      type={props.type}
      {...props.register}
    />
  );
}

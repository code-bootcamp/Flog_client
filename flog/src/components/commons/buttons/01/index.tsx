import styled from "@emotion/styled";
interface IButton01Props {
  type: string;
  contents: string;
  onClick: () => void;
}
export default function Button01(props: IButton01Props) {
  const Button01 = styled.button`
    width: 340px;
    height: 56px;
    border-radius: 10px;
    background-color: #58bd97;
    color: #fff;
    font-weight: 700;
    :hover {
      color: #cacaca;
    }
    margin-bottom: 17px;
  `;
  return (
    <Button01 onClick={props.onClick} type={props.type}>
      {props.contents}
    </Button01>
  );
}

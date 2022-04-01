export interface IAlertProps {
  onClickExit?: () => void;
  onClickSubmit: () => void;
  contents: string;
  onClick?: () => void;
}

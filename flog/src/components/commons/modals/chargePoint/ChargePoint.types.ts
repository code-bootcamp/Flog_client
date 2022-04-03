import { ChangeEventHandler } from "react";

export interface IPointProps {
  pointSelect: boolean | undefined;
  onChangePoint: ChangeEventHandler<HTMLSelectElement> | undefined;
  onClickExit: () => void;
  onClickSubmit: () => void;
  userName: string;
  userPoint: string;
  donation?: boolean | undefined;
}

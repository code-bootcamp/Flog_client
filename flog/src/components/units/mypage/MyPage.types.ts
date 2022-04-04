import { IQuery } from "../../../commons/types/generated/types";

export interface IMyPageUIProps {
  onClickPayment: () => void;
  onClickMoveToDetail: (url: string) => () => void;
  onClickNoLink: () => void;
  onClickPointModal: () => void;
  onClickExitPointModal: () => void;
  onClickSubmitPointModal: () => void;
  onClickExitAlertModal: () => void;
  onClickSubmitAlertModal: () => void;
  data: Pick<IQuery, "fetchUser"> | undefined;
  pointModal: boolean;
  pointSelect: boolean;
  userName: string;
  alertModal: boolean;
  modalContents: string;
}

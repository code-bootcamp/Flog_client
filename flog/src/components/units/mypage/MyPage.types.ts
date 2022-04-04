import { IQuery } from "../../../commons/types/generated/types";

export interface IMyPageUIProps {
  onClickCoverChange: () => void;
  onClickPayment: () => void;
  onClickMoveToDetail: (url: string) => () => void;
  onClickNoLink: () => void;
  data: Pick<IQuery, "fetchUser"> | undefined;
}

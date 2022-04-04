import { NextRouter } from "next/router";

export interface ITripWriteBottomBarUIProps {
  router: NextRouter;
  onClickSubmit: () => void;
  moveToPage: (page: string) => () => void;
  onClickExitAlertModal: () => void;
  onClickSubmitAlertModal: () => void;
  modalContents: string;
  alertModal: boolean;
}

import { NextRouter } from "next/router";

export interface ITripWriteBottomBarUIProps {
  router: NextRouter;
  onClickExit: () => void;
  onClickMoveToPrev: () => void;
  onClickMoveToNext: () => void;
}

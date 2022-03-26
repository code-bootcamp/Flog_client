export interface IMyPageUIProps {
  onClickCoverChange: () => void;
  onClickPoint: () => void;
  onClickMoveToDetail: (url: string) => () => void;
  onClickNoLink: () => void;
}

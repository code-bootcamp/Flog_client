export interface IMyTripListUIProps {
  onClickMoveToOurTrip: () => void;
  userInfo: boolean;
  onClickMore: () => void;
  isMine: boolean;
}

export interface IMyTripListProps {
  isMine: boolean;
  userInfo: boolean;
}

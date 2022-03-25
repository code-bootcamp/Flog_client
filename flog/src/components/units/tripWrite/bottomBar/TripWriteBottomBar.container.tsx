import TripWriteBottomBarUI from "./TripWriteBottomBar.presenter";

export default function TripWriteBottomBar() {
  const onClickExit = () => {
    alert("나가기 클릭!");
  };
  const onClickMoveToPrev = () => {
    alert("이전 클릭!");
  };
  const onClickMoveToNext = () => {
    alert("다음 클릭!");
  };

  return (
    <TripWriteBottomBarUI
      onClickExit={onClickExit}
      onClickMoveToPrev={onClickMoveToPrev}
      onClickMoveToNext={onClickMoveToNext}
    />
  );
}

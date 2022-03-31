import { useRouter } from "next/router";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import TripWriteBottomBarUI from "./TripWriteBottomBar.presenter";

export default function TripWriteBottomBar(props) {
  const { moveToPage } = useMoveToPage();
  const router = useRouter();
  const onClickSubmit = () => {
    alert("저장 클릭!");
    props.saveButtonRef.current?.click();
  };

  return (
    <TripWriteBottomBarUI
      router={router}
      onClickSubmit={onClickSubmit}
      moveToPage={moveToPage}
    />
  );
}

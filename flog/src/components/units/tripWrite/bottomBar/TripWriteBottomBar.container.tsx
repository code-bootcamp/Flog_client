import { useRouter } from "next/router";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import TripWriteBottomBarUI from "./TripWriteBottomBar.presenter";

export default function TripWriteBottomBar(props) {
  const { moveToPage } = useMoveToPage();
  const router = useRouter();
  const onClickSubmit = () => {
    props.saveButtonRef.forEach((x: any) => x.current?.click());
  };

  return (
    <TripWriteBottomBarUI
      router={router}
      onClickSubmit={onClickSubmit}
      moveToPage={moveToPage}
    />
  );
}

import TripWriteLogEditor from "./editor/TripWriteLogEditor.container";

export default function EditorWrapper(props) {
  return (
    <div>
      {props.userData?.fetchSchedule?.tripdates
        .split(";")
        .map((el: any, index: number) => (
          <TripWriteLogEditor
            key={index}
            index={index}
            isShow={props.isShow[index]}
            saveButtonRef={props.saveButtonRef}
            BoardData={props.BoardData?.[index]}
            selected={props.selected[index]}
          />
        ))}
    </div>
  );
}

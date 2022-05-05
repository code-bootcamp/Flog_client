import * as Editor from "./TripWriteLogEditor.styles";
import Alert from "../../../../commons/modals/alert/Alert.container";

export default function TripWriteLogEditorUI(props) {
  return (
    <Editor.Main>
      {props.modalContents && (
        <Alert
          onClickExit={() => props.setModalContents("")}
          onClickSubmit={() => props.setModalContents("")}
          contents={props.modalContents}
        />
      )}
      <div
        style={{ display: "none" }}
        onClick={props.submitDb}
        ref={(el) => (props.saveButtonRef.current?.[props.index] = el)}
      ></div>
      <Editor.EditorWrapper isShow={props.isShow}>
        <Editor.ReactWrapper>
          <h3>Day {props.index + 1}</h3>
          <props.ReactQuill
            forwardedRef={props.quillRef}
            onChange={props.handleChange}
            placeholder={"상세 일정을 작성해 보세요"}
            defaultValue={props.BoardData ? props.BoardData.content : ""}
            modules={props.modules}
            theme="snow"
          />
        </Editor.ReactWrapper>
      </Editor.EditorWrapper>
    </Editor.Main>
  );
}

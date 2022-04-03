import * as Editor from "./TripWriteLogEditor.styles";
import Dompurify from "dompurify";

export default function TripWriteLogEditorUI(props) {
  return (
    <Editor.Main>
      <div
        style={{ display: "none" }}
        onClick={props.submitDb}
        ref={props.saveButtonRef}
      ></div>
      <Editor.EditorWrapper>
        <Editor.ReactWrapper>
          <h3>Day {props.index + 1}</h3>
          <props.ReactQuill
            forwardedRef={props.quillRef}
            onChange={props.handleChange}
            placeholder={"상세 일정을 작성해 보세요"}
            value={props.contents}
            modules={props.modules}
            theme="snow"
          />
        </Editor.ReactWrapper>
      </Editor.EditorWrapper>
    </Editor.Main>
  );
}

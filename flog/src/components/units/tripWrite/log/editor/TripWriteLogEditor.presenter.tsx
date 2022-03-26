import * as Editor from "./TripWriteLogEditor.styles";

export default function TripWriteLogEditorUI(props) {
  return (
    <Editor.Main>
      <Editor.hideWrapper>
        {props.daySchedule.map((el, index) => (
          <button
            ref={props.dayRef[index]}
            onClick={props.addEl(el.name, el.des)}
            key={el}
          >
            {el.des}
          </button>
        ))}
      </Editor.hideWrapper>

      <Editor.EditorWrapper isShow={props.isShow}>
        <Editor.ReactWrapper>
          <h3>Day {props.index + 1}</h3>
          <props.ReactQuill
            forwardedRef={props.quillRef}
            onChange={props.handleChange}
            value={props.contents || "기본값"}
            modules={props.modules}
            theme="snow"
          />
        </Editor.ReactWrapper>
      </Editor.EditorWrapper>
    </Editor.Main>
  );
}

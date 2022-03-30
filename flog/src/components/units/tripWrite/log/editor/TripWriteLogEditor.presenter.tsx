import * as Editor from "./TripWriteLogEditor.styles";
import Dompurify from "dompurify";

export default function TripWriteLogEditorUI(props) {
  return (
    <Editor.Main>
      <Editor.hideWrapper>
        {props.el?.map((el, index) => (
          <button
            ref={props.dayRef?.[index]}
            onClick={props.addEl(el.id, el.useTime)}
            key={el}
          >
            {el.id}
          </button>
        ))}
      </Editor.hideWrapper>

      <Editor.EditorWrapper isShow={props.isShow}>
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
        {process.browser && (
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html: Dompurify.sanitize(String(props.contents)),
              }}
            />
            <div>{props.contents}</div>
          </div>
        )}
      </Editor.EditorWrapper>
    </Editor.Main>
  );
}

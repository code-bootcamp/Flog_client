import { useMemo, useRef, useState, ChangeEvent, useEffect } from "react";
import TripWriteLogEditorUI from "./TripWriteLogEditor.presenter";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(
  async () => {
    const { default: QuillEditor } = await import("react-quill");

    // eslint-disable-next-line react/display-name
    return function ({ forwardedRef, ...props }) {
      return <QuillEditor ref={forwardedRef} {...props} />;
    };
  },
  { ssr: false }
);

export default function TripWriteLogEditor(props) {
  const [contents, setContents] = useState("");
  const quillRef = useRef();

  let quillCurrent: any;
  let editor: any;
  let currentFocus: any;

  const setRefValue = () => {
    quillCurrent = quillRef.current;
    editor = quillCurrent?.getEditor();
    currentFocus = quillCurrent?.getEditorSelection();
    if (!editor) return;
    editor.focus();
  };

  setRefValue();

  const addEl = (name: string, des: string) => () => {
    if (!editor) setRefValue();
    editor?.insertText(currentFocus.index + 1, name, {
      header: 1,
      background: "#F1F1F1",
      size: "large",
      color: "black",
    });
    currentFocus.index += name.length + 1;
    editor?.insertText(currentFocus.index, "  " + des, {
      header: 5,
      size: "small",
      background: "#fff",
      color: " #818181",
    });
    currentFocus.index += des.length + 6;

    editor.setSelection(currentFocus.index, 0, 0);
  };

  const imageHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("className", "ImgUrl");
    input.setAttribute("accept", "image/*");
    document.body.appendChild(input);
    input.click();
    input.onchange = async (event: ChangeEvent<HTMLInputElement>) => {
      if (!editor) {
        console.log("에디터가 없어용");
        setRefValue();
      }
      editor.focus();

      const file = event.target.files?.[0];
      console.log(file);
      // const result = await uploadFile({ variables: { file } });
      // const fileUrl = result.data?.uploadFile.url;

      editor.insertEmbed(
        quillCurrent.getEditorSelection().index,
        "image",
        // `https://storage.googleapis.com/${fileUrl}`
        `/img/${file}`
      );
      input.remove();
    };
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, 6, 7] }],
          [{ font: [] }],
          [{ align: [] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
            "link",
          ],
          [
            {
              // prettier-ignore
              color: [
                "#000000","#e60000","#ff9900","#ffff00","#008a00","#0066cc","#9933ff","#ffffff","#facccc","#ffebcc","#ffffcc","#cce8cc","#cce0f5","#ebd6ff","#bbbbbb","#f06666","#ffc266","#ffff66","#66b966","#66a3e0","#c285ff","#888888","#a10000","#b26b00","#b2b200","#006100","#0047b2","#6b24b2","#444444","#5c0000","#663d00","#666600","#003700","#002966","#3d1466","custom-color",
              ],
            },
            { background: [] },
            {},
          ],
          ["image", "video"],
          ["clean"],
        ],
        handlers: { image: imageHandler },
      },
    }),
    []
  );

  const handleChange = (value) => {
    setContents(value);
  };

  useEffect(() => {
    setRefValue();
  }, [imageHandler, props.isShow]);

  return (
    <TripWriteLogEditorUI
      ReactQuill={ReactQuill}
      daySchedule={props.el}
      addEl={addEl}
      handleChange={handleChange}
      contents={contents}
      modules={modules}
        ={quillRef}
      index={props.index}
      el={props.el}
      dayRef={props.dayRef}
      isShow={props.isShow}
    />
  );
}

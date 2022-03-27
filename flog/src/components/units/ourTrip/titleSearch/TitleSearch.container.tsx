import TitleSearchUI from "./TitleSearch.presenter";

export default function TitleSearch() {
  const onClickSearch = () => {
    alert("제목 검색하기");
  };

  const onChangeTitle = (event) => {
    console.log(event.target.value);
  };

  return (
    <TitleSearchUI
      onClickSearch={onClickSearch}
      onChangeTitle={onChangeTitle}
    />
  );
}

import TitleSearchUI from "./TitleSearch.presenter";

export default function TitleSearch() {
  const onClickSearch = () => {
    alert("제목 검색하기");
  };
  return <TitleSearchUI onClickSearch={onClickSearch} />;
}

import TitleSearchUI from "./TagSearch.presenter";

export default function TagSearch() {
  const onClickSearch = () => {
    alert("태그 검색하기");
  };
  return <TitleSearchUI onClickSearch={onClickSearch} />;
}

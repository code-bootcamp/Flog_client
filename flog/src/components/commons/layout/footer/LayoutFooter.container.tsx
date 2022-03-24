import LayoutFooterUI from "./LayoutFooter.presenter";

export default function LayoutFooter() {
  const onClickSiteMap = (url: string) => () => {
    alert(`이 버튼을 클릭하면 '${url}'으로 연결됩니다.`);
  };
  return <LayoutFooterUI onClickSiteMap={onClickSiteMap} />;
}

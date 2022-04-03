import withAuth from "../../src/components/commons/hocs/withAuth";
import MyPage from "../../src/components/units/mypage/MyPage.container";

export function MyPagePage() {
  return <MyPage />;
}

export default withAuth(MyPagePage);

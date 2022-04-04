import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../../pages/_app";
import Alert from "../modals/alert/Alert.container";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const withAuth = (Component) => (props) => {
  const router = useRouter();
  const { accessToken } = useContext(GlobalContext);
  const [alertModal, setAlertModal] = useState(false);
  const onClickExitAlertModal = () => {
    router.push("/login");
  };
  const onClickSubmitAlertModal = () => {
    router.push("/login");
  };
  useEffect(() => {
    if (!accessToken) {
      setAlertModal(true);
    }
  }, []);

  return (
    <>
      {alertModal && (
        <Alert
          onClickExit={onClickExitAlertModal}
          onClickSubmit={onClickSubmitAlertModal}
          contents="로그인이 필요한 서비스입니다"
        />
      )}
      <Component {...props} />
    </>
  );
};
export default withAuth;

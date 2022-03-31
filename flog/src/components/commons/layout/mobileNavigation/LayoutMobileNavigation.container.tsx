import { useRouter } from "next/router";
import LayoutMobileNavigationUI from "./LayoutMobileNavigation.presenter";

export default function LayoutMobileNavigation() {
  const router = useRouter();
  const onClickButton = (url: string) => () => {
    router.push(url);
  };

  return (
    <LayoutMobileNavigationUI router={router} onClickButton={onClickButton} />
  );
}

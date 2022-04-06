import { useRouter } from "next/router";
import ContainedButton01UI from "../../../commons/buttons/contained/01/ContainedButton01.presenter";
import * as My from "./MyTripBanner.styles";
import { IMyTripsBannerUIProps } from "./MyTripBanner.types";

export default function MyTripBanner(props) {
  const router = useRouter();
  return (
    <My.Banner>
      <My.BgImage />
      <My.BgImage2>
        {props.userData && props.myData ? (
          <My.Illust2>
            <img className="stack" src="/img/illust-stack.png" />
          </My.Illust2>
        ) : (
          <>
            <My.Illust1>
              <img className="cloud-small" src="/img/illust-cloud1.png" />
              <img className="airplane" src="/img/illust-airplane.png" />
              <img className="cloud-big" src="/img/illust-cloud2.png" />
            </My.Illust1>
          </>
        )}
      </My.BgImage2>
      <My.InnerWrap>
        <My.UpperWrap>
          <My.Title>
            {props.userData && props.myData ? (
              <>
                {props.userData.fetchUser.nickName} 님
                <br />
                Flog와 함께 여행해보세요!
              </>
            ) : (
              <>
                Flog가 처음이신가요?
                <br />
                지금 여행을 시작해 보세요
              </>
            )}
          </My.Title>
          {props.userData && props.myData ? (
            <ContainedButton01UI
              content="새로운 여행 만들기"
              size="large"
              onClick={props.onClickMapModal}
              disabled={false}
            />
          ) : (
            <ContainedButton01UI
              content="새로운 여행 만들기"
              size="large"
              onClick={() => router.push("/login")}
              disabled={false}
            />
          )}
        </My.UpperWrap>
        <My.LowerWrap></My.LowerWrap>
      </My.InnerWrap>
    </My.Banner>
  );
}

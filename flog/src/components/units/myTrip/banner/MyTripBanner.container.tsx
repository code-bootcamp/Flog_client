import ContainedButton01UI from "../../../commons/buttons/contained/01/ContainedButton01.presenter";
import * as My from "./MyTripBanner.styles";
import { IMyTripsBannerUIProps } from "./MyTripBanner.types";

export default function MyTripBanner(props) {
  return (
    <My.Banner>
      <My.BgImage></My.BgImage>
      <My.BgImage2></My.BgImage2>
      <My.Contents>
        {props.userData && props.myData ? (
          <>
            <My.Title>
              {props.userData.fetchUser.nickName} 님
              <br />
              Flog와 함께 여행해보세요!
            </My.Title>
            <ContainedButton01UI
              content="새로운 여행 만들기"
              size="large"
              onClick={props.onClickMapModal}
              disabled={false}
            />
            {/* <My.Illust1>
              <My.ImageCloud1>
                <img src="/img/illust-cloud1.png" />
              </My.ImageCloud1>
              <My.ImageAirplane>
                <img src="/img/illust-airplane.png" />
              </My.ImageAirplane>
              <My.ImageCloud2>
                <img src="/img/illust-cloud2.png" />
              </My.ImageCloud2>
            </My.Illust1> */}
          </>
        ) : (
          <>
            <My.Title>
              Flog가 처음이신가요?
              <br />
              지금 여행을 시작해 보세요
            </My.Title>
            <ContainedButton01UI
              content="새로운 여행 만들기"
              size="large"
              onClick={props.onClickMapModal}
              disabled={false}
            />
            <My.Illust2>{/* <img src="/img/illust-stack.png" /> */}</My.Illust2>
          </>
        )}
      </My.Contents>
    </My.Banner>
  );
}

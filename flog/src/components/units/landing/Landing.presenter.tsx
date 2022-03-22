import * as Landing from "./Landing.styles";
import { useRouter } from "next/router";
import Slider from "react-slick";
import { ILandingPageUI } from "./Landing.types";

export default function LandingPageUI(props: ILandingPageUI) {
  const router = useRouter();
  return (
    <Landing.Container>
      <Landing.MainImg>
        <Slider {...props.settings}>
          {[1, 2, 3].map((el, index) => (
            <Landing.SliderWrapper key={el}>
              <Landing.ImageBox className={`img${index}`}>
                {/* <img src={`/img/main-bg-img${el}.png`} /> */}
              </Landing.ImageBox>
            </Landing.SliderWrapper>
          ))}
        </Slider>
        <Landing.TextGroup>
          <div>
            <Landing.TitleSub>나만의 여행 가이드북을 만들다.</Landing.TitleSub>
            <Landing.TitleMain>Flog</Landing.TitleMain>
          </div>

          <Landing.Description>
            Flog는 여행의 소중한 추억을 간직할 수 있는 여행
            가이드북입니다.여행일정, 가계부, 다이어리 등을 이용하여 여행과
            관련된 모든 일들을 기록해 보세요!
          </Landing.Description>
        </Landing.TextGroup>
      </Landing.MainImg>
      <Landing.SubSection>
        <h4>Flog 둘러보기</h4>
        <Landing.LookAround>
          <Landing.LookAroundBox>
            <img src="/img/landing-lookAround.png" />
            <img src="/img/landing-lookAround-bg.png" />
            <Landing.Text>
              <Landing.BoxDescription>
                여행을 하며 추억을 담는 가이드북
              </Landing.BoxDescription>
              <Landing.BoxTitle>나의 여행</Landing.BoxTitle>

              <Landing.BoxBtn
                onClick={() => {
                  router.push("/");
                }}
              >
                보러가기
              </Landing.BoxBtn>
            </Landing.Text>
          </Landing.LookAroundBox>
          <Landing.LookAroundBox>
            <img src="/img/landing-lookAround2.png" />
            <img src="/img/landing-lookAround-bg.png" />
            <Landing.Text>
              <Landing.BoxDescription>
                내 경험을 다른 이들에게 들려주는 공유 공간
              </Landing.BoxDescription>
              <Landing.BoxTitle>우리의 여행</Landing.BoxTitle>
              <Landing.BoxBtn
                onClick={() => {
                  router.push("/");
                }}
              >
                보러가기
              </Landing.BoxBtn>
            </Landing.Text>
          </Landing.LookAroundBox>
        </Landing.LookAround>
      </Landing.SubSection>
    </Landing.Container>
  );
}

import * as Main from "./Main.styles";
import { useRouter } from "next/router";
import Slider from "react-slick";
import { IMainUIProps } from "./Main.types";

export default function MainUI(props: IMainUIProps) {
  const router = useRouter();
  return (
    <Main.Container>
      <Main.MainImg>
        <Slider {...props.settings}>
          {[1, 2, 3].map((el, index) => (
            <Main.SliderWrapper key={el}>
              <Main.ImageBox className={`img${index}`}>
                {/* <img src={`/img/main-bg-img${el}.png`} /> */}
              </Main.ImageBox>
            </Main.SliderWrapper>
          ))}
        </Slider>
        <Main.TextGroup>
          <div>
            <Main.TitleSub>나만의 여행 가이드북을 만들다.</Main.TitleSub>
            <Main.TitleMain>Flog</Main.TitleMain>
          </div>

          <Main.Description>
            Flog는 여행의 소중한 추억을 간직할 수 있는 여행
            가이드북입니다.여행일정, 가계부, 다이어리 등을 이용하여 여행과
            관련된 모든 일들을 기록해 보세요!
          </Main.Description>
        </Main.TextGroup>
      </Main.MainImg>
      <Main.SubSection>
        <h4>Flog 둘러보기</h4>
        <Main.LookAround>
          <Main.LookAroundBox>
            <img src="/img/landing-lookAround.png" />
            <img src="/img/landing-lookAround-bg.png" />
            <Main.Text>
              <Main.BoxDescription>
                여행을 하며 추억을 담는 가이드북
              </Main.BoxDescription>
              <Main.BoxTitle>나의 여행</Main.BoxTitle>

              <Main.BoxBtn
                onClick={() => {
                  router.push("/");
                }}
              >
                보러가기
              </Main.BoxBtn>
            </Main.Text>
          </Main.LookAroundBox>
          <Main.LookAroundBox>
            <img src="/img/landing-lookAround2.png" />
            <img src="/img/landing-lookAround-bg.png" />
            <Main.Text>
              <Main.BoxDescription>
                내 경험을 다른 이들에게 들려주는 공유 공간
              </Main.BoxDescription>
              <Main.BoxTitle>우리의 여행</Main.BoxTitle>
              <Main.BoxBtn
                onClick={() => {
                  router.push("/");
                }}
              >
                보러가기
              </Main.BoxBtn>
            </Main.Text>
          </Main.LookAroundBox>
        </Main.LookAround>
      </Main.SubSection>
    </Main.Container>
  );
}

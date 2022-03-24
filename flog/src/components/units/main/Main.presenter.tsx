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
          {[1, 2, 3].map((el) => (
            <Main.BackImgBox key={el} bgImg={el}>
              <Main.SliderWrapper>
                <Main.TextGroup>
                  <div>
                    <Main.TitleSub>
                      {el === 1
                        ? "나만의 여행 가이드북을 만들다."
                        : el === 2
                        ? "우물 밖이 궁금한 여행자 모여라"
                        : "지금 회원가입하면"}
                    </Main.TitleSub>
                    <Main.TitleMain>
                      {el === 3 ? "5000 Point" : "Flog"}
                    </Main.TitleMain>
                  </div>

                  <Main.Description bgImg={el}>
                    {el === 3
                      ? "포인트로 배가 되는"
                      : "여행일정, 가계부, 다이어리 등  "}{" "}
                    <br />
                    {el === 3
                      ? "여행의 즐거움을 누려보세요!"
                      : "여행과 관련된 모든 일들을 "}
                    <br />
                    {el === 3 ? "" : "기록해 보세요!"}
                  </Main.Description>
                </Main.TextGroup>
                <Main.ImageBox bgImg={el} />
              </Main.SliderWrapper>
            </Main.BackImgBox>
          ))}
        </Slider>
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

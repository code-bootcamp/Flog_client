import * as Main from "./Main.styles";
import { useRouter } from "next/router";
import Slider from "react-slick";
import { IMainUIProps } from "./Main.types";

import ContainedButton01 from "../../commons/buttons/contained/01/ContainedButton01.container";

export default function MainUI(props: IMainUIProps) {
  const router = useRouter();
  return (
    <Main.Container>
      <Main.MainImg>
        <Slider {...props.settings}>
          {[1, 2, 3].map((el, index) => (
            <Main.BackImgBox key={el} bgImg={el}>
              <Main.SliderWrapper>
                <Main.TextGroup>
                  <div>
                    <Main.TitleSub
                      className={index === props.activeSlide ? "isActive" : ""}
                    >
                      {el === 1
                        ? "나만의 여행 가이드북을 만들다."
                        : el === 2
                        ? "우물 밖이 궁금한 여행자 모여라"
                        : "지금 회원가입하면"}
                    </Main.TitleSub>
                    <Main.TitleMain
                      className={index === props.activeSlide ? "isActive" : ""}
                    >
                      {el === 3 ? "5000 Point" : "Flog"}
                    </Main.TitleMain>
                  </div>

                  <Main.Description
                    bgImg={el}
                    className={index === props.activeSlide ? "isActive" : ""}
                  >
                    {el === 3
                      ? "포인트로 배가 되는"
                      : "여행일정, 가계부, 다이어리 등  "}{" "}
                    <br />
                    {el === 3
                      ? "여행의 즐거움을 누려보세요!"
                      : "여행과 관련된 모든 일들을 "}
                    <br />
                    {el === 3 ? <span> &nbsp;</span> : "기록해 보세요!"}
                  </Main.Description>
                </Main.TextGroup>
                <Main.ImageBox
                  bgImg={el}
                  className={index === props.activeSlide ? "isActive" : ""}
                />
              </Main.SliderWrapper>
            </Main.BackImgBox>
          ))}
        </Slider>
      </Main.MainImg>

      <Main.SubSection>
        <h4>둘러보기</h4>
        <Main.LookAround>
          <Main.LookAroundBox>
            <Main.BoxBgImage
              img={"/img/landing-lookAround.png"}
              className="bgImage"
            ></Main.BoxBgImage>
            <Main.Text>
              <Main.BoxDescription>
                여행을 하며 추억을 담는 가이드북
              </Main.BoxDescription>
              <Main.BoxTitle>나의 여행</Main.BoxTitle>

              <ContainedButton01
                content="보러가기"
                size="medium"
                onClick={() => {
                  router.push("/myTrips");
                }}
              ></ContainedButton01>
            </Main.Text>
          </Main.LookAroundBox>
          <Main.LookAroundBox>
            <Main.BoxBgImage
              img={"/img/landing-lookAround2.png"}
              className="bgImage"
            ></Main.BoxBgImage>
            <Main.Text>
              <Main.BoxDescription>
                내 경험을 나누며 즐기는 공유 공간
              </Main.BoxDescription>
              <Main.BoxTitle>우리의 여행</Main.BoxTitle>
              <ContainedButton01
                content="보러가기"
                size="medium"
                onClick={() => {
                  router.push("/ourTrips");
                }}
              ></ContainedButton01>
            </Main.Text>
          </Main.LookAroundBox>
        </Main.LookAround>
      </Main.SubSection>
    </Main.Container>
  );
}

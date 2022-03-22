import TripWriteBanner from "../banner/TripWriteBanner.container";
import TripWriteNavigation from "../navigation/TripWriteNavigation.container";
import { SAMPLE_DATA } from "./SampleData";
import * as Write from "./TripWritePlans.styles";

export default function TripWritePlansUI() {
  return (
    <Write.Container>
      <TripWriteBanner />
      <TripWriteNavigation />
      <Write.Contents>
        <Write.InnerWrap>
          {SAMPLE_DATA.map((el) => (
            <Write.Column key={el.title.day}>
              <Write.TitleBox>
                <Write.Title>
                  <Write.TitleNumber>
                    <span>{el.title.day}</span>
                  </Write.TitleNumber>
                  <Write.TitleText>
                    <p className="date">{el.title.date}</p>
                    <p className="text">일차</p>
                  </Write.TitleText>
                </Write.Title>
              </Write.TitleBox>
              <Write.PlansBox>
                {el.contents.map((content) => (
                  <div key={content.name}>
                    <span>{content.name}</span>
                  </div>
                ))}
              </Write.PlansBox>
            </Write.Column>
          ))}
        </Write.InnerWrap>
      </Write.Contents>
    </Write.Container>
  );
}

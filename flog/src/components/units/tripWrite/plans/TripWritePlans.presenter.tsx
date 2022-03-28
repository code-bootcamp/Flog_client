import {
  getDateString,
  getMonthString,
  getWeekdayString,
} from "../../../../commons/utils/getDate";
import TripWriteBanner from "../banner/TripWriteBanner.container";
import TripWriteBottomBar from "../bottomBar/TripWriteBottomBar.container";
import TripWriteNavigation from "../navigation/TripWriteNavigation.container";
import TripWritePlansAdd from "./add/TripWritePlansAdd.container";
import TripWritePlansCard from "./card/TripWritePlansCard.container";
import { SAMPLE_DATA } from "./SampleData";
import * as Write from "./TripWritePlans.styles";

export default function TripWritePlansUI(props) {
  return (
    <Write.Container>
      <TripWriteBanner />
      <TripWriteNavigation />
      <Write.Contents>
        <Write.InnerWrap>
          {props.tripTitleDataArray.map((el, index) => (
            <Write.Column key={el.id + String(index)}>
              <Write.TitleBox>
                <Write.Title>
                  <Write.TitleNumber>
                    <span>{index + 1}</span>
                  </Write.TitleNumber>
                  <Write.TitleText>
                    <p className="date">
                      {`${getMonthString(el.startDate, index)}.${getDateString(
                        el.startDate,
                        index
                      )} (${getWeekdayString(el.startDate, index)})`}
                    </p>
                    <p className="text">일차</p>
                  </Write.TitleText>
                </Write.Title>
              </Write.TitleBox>
              <Write.PlansBox>
                {/* {el.contents.map((content) => (
                  <TripWritePlansCard content={content} key={content.name} />
                ))} */}
                <TripWritePlansAdd />
              </Write.PlansBox>
            </Write.Column>
          ))}
        </Write.InnerWrap>
      </Write.Contents>
      <TripWriteBottomBar />
    </Write.Container>
  );
}

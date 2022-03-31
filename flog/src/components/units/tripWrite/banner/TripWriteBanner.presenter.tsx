import * as Write from "./TripWriteBanner.styles";
import { ITripWriteBannerUIProps } from "./TripWriteBanner.types";

export default function TripWriteBannerUI(props: ITripWriteBannerUIProps) {
  return (
    <Write.Banner>
      <Write.BgImage
        url={props.data?.fetchSchedule?.url}
        bucketUrl={props.bucketUrl}
      ></Write.BgImage>
      <Write.Text>
        <Write.Title>{props.data?.fetchSchedule?.title}</Write.Title>
        <Write.SubTitle>
          {props.data?.fetchSchedule?.startDate} ~{" "}
          {props.data?.fetchSchedule?.endDate}{" "}
          <span>{props.changeWordHashtag()}</span>
        </Write.SubTitle>
      </Write.Text>
    </Write.Banner>
  );
}

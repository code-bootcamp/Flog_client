import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchScheduleArgs,
} from "../../../../commons/types/generated/types";
import TripWriteBannerUI from "./TripWriteBanner.presenter";
import { FETCH_SCHEDULE } from "./TripWriteBanner.queries";

export default function TripWriteBanner() {
  const router = useRouter();
  const bucketUrl = "https://storage.cloud.google.com/";
  const { data } = useQuery<
    Pick<IQuery, "fetchSchedule">,
    IQueryFetchScheduleArgs
  >(FETCH_SCHEDULE, {
    variables: {
      scheduleId: router.query.scheduleId || "",
    },
  });

  const changeWordHashtag = () => {
    const hashtag = data?.fetchSchedule?.hashtag;
    if (hashtag === "ALONE") return "혼자 여행";
    if (hashtag === "FRIEND") return "우정 여행";
    if (hashtag === "FAMILY") return "커플 여행";
    if (hashtag === "COUPLE") return "가족 여행";
    if (hashtag === "PET") return "반려동물 여행";
  };

  return (
    <TripWriteBannerUI
      data={data}
      bucketUrl={bucketUrl}
      changeWordHashtag={changeWordHashtag}
    />
  );
}

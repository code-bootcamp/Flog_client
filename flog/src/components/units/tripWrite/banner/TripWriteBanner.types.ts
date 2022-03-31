import { Maybe } from "graphql/jsutils/Maybe";
import { IQuery } from "../../../../commons/types/generated/types";

export interface ITripWriteBannerUIProps {
  data: Pick<IQuery, "fetchSchedule"> | undefined;
  bucketUrl: string;
  changeWordHashtag: () =>
    | "혼자 여행"
    | "우정 여행"
    | "커플 여행"
    | "가족 여행"
    | "반려동물 여행"
    | undefined;
}

export interface ITipWriteBannerUIEmotionProps {
  url: Maybe<string> | undefined;
  bucketUrl: string;
}

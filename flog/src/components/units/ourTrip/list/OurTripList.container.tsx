import { useQuery } from "@apollo/client";
import { FETCH_SHARE_SCHEDULES } from "../OurTrip.queries";
import OurTripListUI from "./OurTripList.presenter";

export default function OurTripList() {
  const { data: shareData, fetchMore } = useQuery(FETCH_SHARE_SCHEDULES);

  const onClickMoreOurTrip = () => {
    if (!shareData) return;

    fetchMore({
      variables: {
        page: Math.ceil(shareData?.fetchShareSchedules.length / 12) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchShareSchedules)
          return { fetchShareSchedules: [...prev.fetchShareSchedules] };

        return {
          fetchShareSchedules: [
            ...prev.fetchShareSchedules,
            ...fetchMoreResult.fetchShareSchedules,
          ],
        };
      },
    });
  };
  return (
    <OurTripListUI
      onClickMoreOurTrip={onClickMoreOurTrip}
      shareData={shareData}
    />
  );
}

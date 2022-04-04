import { useMutation, useQuery } from "@apollo/client";
import MyTripListUI from "./MyTripList.presenter";
import {
  FETCH_SCHEDULES,
  GET_BANNER_IMAGE_URL,
  UPLOAD_BANNER_IMAGE,
} from "./MyTripList.queries";

export default function MyTripList(props) {
  const [uploadBannerImagefile] = useMutation(GET_BANNER_IMAGE_URL);
  const [updateBannerImage] = useMutation(UPLOAD_BANNER_IMAGE);

  const { data: myData, fetchMore } = useQuery(FETCH_SCHEDULES, {
    variables: { page: 1 },
  });

  const onClickMoreMyTrip = () => {
    if (!myData) return;

    fetchMore({
      variables: {
        page: Math.ceil(myData.fetchSchedules.length / 12) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchSchedules)
          return { fetchSchedules: [...prev.fetchSchedules] };

        return {
          fetchSchedules: [
            ...prev.fetchSchedules,
            ...fetchMoreResult.fetchSchedules,
          ],
        };
      },
    });
  };

  const onChangeFile = async (event) => {
    const file = event.target.files[0];
    try {
      const result = await uploadBannerImagefile({
        variables: { file },
      });
      const url = result?.data?.uploadBannerImagefile;
      try {
        await updateBannerImage({
          variables: {
            scheduleId: String(event.target.id),
            updateBannerImageInput: {
              url: url,
            },
          },
        });
      } catch (error) {
        console.log(error.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <MyTripListUI
      onClickMoreMyTrip={onClickMoreMyTrip}
      onChangeFile={onChangeFile}
      myData={myData}
    />
  );
}

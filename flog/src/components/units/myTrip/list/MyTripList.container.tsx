import { useMutation, useQuery } from "@apollo/client";
import MyTripListUI from "./MyTripList.presenter";
import {
  FETCH_SCHEDULES,
  GET_BANNER_IMAGE_URL,
  UPLOAD_BANNER_IMAGE,
} from "./MyTripList.queries";
import imageCompression from "browser-image-compression";
import { checkFileValidation } from "../../../../commons/utils/checkFileValidation";

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
    const isValid = checkFileValidation(file);
    if (!isValid) return;

    const options = {
      maxSizeMB: 2,
      maxWidthOrHeight: 500,
    };

    try {
      const compressedFile = await imageCompression(file, options);
      try {
        const compressedResult = await uploadBannerImagefile({
          variables: {
            file: compressedFile,
          },
        });

        const originResult = await uploadBannerImagefile({
          variables: {
            file: file,
          },
        });

        const url = originResult?.data?.uploadBannerImagefile;
        const thumbnailUrl = compressedResult?.data?.uploadBannerImagefile;

        try {
          const result = await updateBannerImage({
            variables: {
              updateBannerImageInput: { url, thumbnailUrl },
              scheduleId: String(event.target.id),
            },
          });
        } catch (error) {
          console.log(error.message);
        }
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

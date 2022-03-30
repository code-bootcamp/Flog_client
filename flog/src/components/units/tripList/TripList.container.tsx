import { gql, useMutation } from "@apollo/client";
import { useRef } from "react";
import OutlinedButton01 from "../../commons/buttons/outlined/01/OutlinedButton01.container";
import TripListUI from "./TripList.presenter";

const GET_BANNER_IMAGE_URL = gql`
  mutation uploadBannerImagefile($file: Upload!) {
    uploadBannerImagefile(file: $file)
  }
`;

const UPLOAD_BANNER_IMAGE = gql`
  mutation updateBannerImage(
    $scheduleId: String!
    $updateBannerImageInput: updateBannerImageInput!
  ) {
    updateBannerImage(
      scheduleId: $scheduleId
      updateBannerImageInput: $updateBannerImageInput
    ) {
      id
      url
      title
    }
  }
`;

export default function TripList(props) {
  const [uploadBannerImagefile] = useMutation(GET_BANNER_IMAGE_URL);
  const [updateBannerImage] = useMutation(UPLOAD_BANNER_IMAGE);

  const onChangeFile = async (event) => {
    const file = event.target.files[0];
    try {
      const result = await uploadBannerImagefile({
        variables: { file },
      });
      const url = result?.data?.uploadBannerImagefile;
      // console.log(result?.data?.uploadBannerImagefile);
      try {
        await updateBannerImage({
          variables: {
            scheduleId: String(event.target.id),
            updateBannerImageInput: {
              url: url,
            },
          },
        });
        // console.log(imageResult?.data?.updateBannerImage);
      } catch (error) {
        console.log(error.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <TripListUI
        isMine={props.isMine}
        shareData={props.shareData}
        myData={props.myData}
        onChangeFile={onChangeFile}
      />
      <OutlinedButton01
        content="더보기"
        size="large"
        onClick={props.onClickMore}
      />
    </>
  );
}

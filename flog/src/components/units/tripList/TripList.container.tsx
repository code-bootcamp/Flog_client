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
    }
  }
`;

export default function TripList(props) {
  const [uploadBannerImagefile] = useMutation(GET_BANNER_IMAGE_URL);
  const [updateBannerImage] = useMutation(UPLOAD_BANNER_IMAGE);
  const fileRef = useRef(null);

  const onChangeFile = async (event) => {
    const file = event.target.files[0];
    console.log(file);
    try {
      const result = await uploadBannerImagefile({
        variables: { file },
      });
      const url = result?.data?.uploadBannerImagefile;
      // console.log(result?.data?.uploadBannerImagefile);
      try {
        const imageResult = await updateBannerImage({
          variables: {
            scheduleId: String("de3d1bc0-38fe-4b6d-a439-03c9be6c864b"),
            updateBannerImageInput: {
              url: { url },
            },
          },
        });
        console.log(imageResult);
      } catch (error) {
        console.log(error.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const onClickUploadBanner = () => {
    fileRef.current?.click();
  };

  return (
    <>
      <TripListUI
        isMine={props.isMine}
        shareData={props.shareData}
        hashTagData={props.hashTagData}
        myData={props.myData}
        onChangeFile={onChangeFile}
        fileRef={fileRef}
        onClickUploadBanner={onClickUploadBanner}
      />
      <OutlinedButton01
        content="더보기"
        size="large"
        onClick={props.onClickMore}
      />
    </>
  );
}

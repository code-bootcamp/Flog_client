import { gql } from "@apollo/client";

export const FETCH_SCHEDULES = gql`
  query fetchSchedules($page: Float) {
    fetchSchedules(page: $page) {
      id
      title
      location
      startDate
      endDate
      isShare
      url
    }
  }
`;
export const GET_BANNER_IMAGE_URL = gql`
  mutation uploadBannerImagefile($file: Upload!) {
    uploadBannerImagefile(file: $file)
  }
`;

export const UPLOAD_BANNER_IMAGE = gql`
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

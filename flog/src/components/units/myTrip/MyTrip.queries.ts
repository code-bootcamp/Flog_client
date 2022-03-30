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

export const FETCH_USER = gql`
  query fetchUser {
    fetchUser {
      id
      nickName
    }
  }
`;

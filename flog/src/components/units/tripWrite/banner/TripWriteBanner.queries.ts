import { gql } from "@apollo/client";

export const FETCH_SCHEDULE = gql`
  query fetchSchedule($scheduleId: String!) {
    fetchSchedule(scheduleId: $scheduleId) {
      id
      title
      location
      startDate
      endDate
      url
      isShare
      numberPeople
      hashtag
      tripdates
    }
  }
`;

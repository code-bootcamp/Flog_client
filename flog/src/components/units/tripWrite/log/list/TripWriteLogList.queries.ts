import { gql } from "@apollo/client";
export const FETCH_DETAIL_SCHEDULES = gql`
  query fetchDetailSchedules($scheduleId: String!, $userId: String!) {
    fetchDetailSchedules(scheduleId: $scheduleId, userId: $userId) {
      id
      day
      date
      startTime
      useTime
      place
      memo
      schedule {
        id
        title
        location
        startDate
        endDate
      }
    }
  }
`;
export const FETCH_DETAIL_SCHEDULE = gql`
  query fetchDetailSchedule($scheduleId: String!, $day: String!) {
    fetchDetailSchedule(scheduleId: $scheduleId, day: $day) {
      id
      day
      date
      startTime
      useTime
    }
  }
`;

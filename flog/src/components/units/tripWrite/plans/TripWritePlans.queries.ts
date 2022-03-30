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
      }
    }
  }
`;

export const FETCH_SCHEDULE = gql`
  query fetchSchedule($scheduleId: String!) {
    fetchSchedule(scheduleId: $scheduleId) {
      id
      title
      startDate
      endDate
    }
  }
`;

import { gql } from "@apollo/client";

export const FETCH_DETAIL_SCHEDULES = gql`
  query fetchDetailSchedules($scheduleId: String!) {
    fetchDetailSchedules(scheduleId: $scheduleId) {
      id
      day
      date
      startTime
      useTime
      place
      memo
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
      place
      memo
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
      tripdates
    }
  }
`;

export const DELETE_DETAIL_SCHEDULE = gql`
  mutation deleteDetailSchedule($detailScheduleId: String!) {
    deleteDetailSchedule(detailScheduleId: $detailScheduleId)
  }
`;

export const CREATE_DETAIL_SCHEDULE = gql`
  mutation createDetailSchedule(
    $createDetailScheduleInput: CreateDetailScheduleInput!
    $scheduleId: String!
  ) {
    createDetailSchedule(
      createDetailScheduleInput: $createDetailScheduleInput
      scheduleId: $scheduleId
    ) {
      id
      day
      date
      place
    }
  }
`;

import { gql } from "@apollo/client";

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
      startTime
      useTime
      place
      memo
    }
  }
`;

export const UPDATE_DETAIL_SCHEDULE = gql`
  mutation updateDetailSchedule(
    $updateDetailScheduleInput: UpdateDetailScheduleInput!
    $detailScheduleId: String!
  ) {
    updateDetailSchedule(
      updateDetailScheduleInput: $updateDetailScheduleInput
      detailScheduleId: $detailScheduleId
    ) {
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

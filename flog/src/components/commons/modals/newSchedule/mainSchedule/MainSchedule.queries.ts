import { gql } from "@apollo/client";

export const CREATE_SCHEDULE = gql`
  mutation createSchedule($createScheduleInput: CreateScheduleInput!) {
    createSchedule(createScheduleInput: $createScheduleInput) {
      id
    }
  }
`;

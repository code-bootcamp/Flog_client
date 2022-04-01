import { gql } from "@apollo/client";

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
export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!,$scheduleId: String!) {
    createBoard(createBoardInput: $createBoardInput, scheduleId: $scheduleId ) {
      id
      day
      content
    } 
  }
`
import { gql } from "@apollo/client";

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!,$scheduleId: String!) {
    createBoard(createBoardInput: $createBoardInput, scheduleId: $scheduleId ) {
      id
      day
      content
    } 
  }
`
export const SHARE = gql`
  mutation share($scheduleId: String! ) {
    share(scheduleId: $scheduleId ) {
      id
    }
  }
  `
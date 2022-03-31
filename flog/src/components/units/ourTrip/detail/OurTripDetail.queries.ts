import { gql } from "@apollo/client";

export const FETCH_BOARD = gql`
  query fetchBoard($scheduleId: String!) {
    fetchBoard(scheduleId: $scheduleId) {
      day
      content
    }
  }
`;

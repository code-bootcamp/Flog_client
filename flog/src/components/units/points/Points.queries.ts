import { gql } from "@apollo/client";

export const FETCH_POINT_HISTORY = gql`
  query fetchPointHistory {
    fetchPointHistory {
      id
      changed
      createdAt
      status
      # pointId {
      #   amount
      # }
      
    }
  }
`;
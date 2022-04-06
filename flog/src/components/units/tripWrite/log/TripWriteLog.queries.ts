import { gql } from "@apollo/client";
export const PAYMENT_POINT_TRANSACTION = gql`
  mutation paymentPointTransaction($userId: String!, $point: Float!) {
    paymentPointTransaction(userId: $userId, point: $point) {
      id
    }
  }
`;

export const UPDATE_SHARE = gql`
  mutation updateShare($scheduleId: String!) {
    updateShare(scheduleId: $scheduleId) {
      id
    }
  }
`;
export const FETCH_SCHEDULE = gql`
  query fetchSchedule($scheduleId: String!) {
    fetchSchedule(scheduleId: $scheduleId) {
      user {
        id
        email
        nickName
        url
      }
      tripdates
      isShare
    }
  }
`;
export const FETCH_USER = gql`
  query fetchUser {
    fetchUser {
      nickName
      point
    }
  }
`;
export const DELETE_BOARD = gql`
  mutation deleteBoard($scheduleId: String!) {
    deleteBoard(scheduleId: $scheduleId)
  }
`;
export const FETCH_BOARD = gql`
  query fetchBoard ($scheduleId: String!){
    fetchBoard(scheduleId: $scheduleId) {
      id
      day
      content
    }
  }
`;
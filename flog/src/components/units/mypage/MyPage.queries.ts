import { gql } from "@apollo/client";

export const FETCH_USER = gql`
  query fetchUser {
    fetchUser {
      id
      email
      nickName
      phoneNumber
      point
      url
    }
  }
`;

export const CREATE_POINT_TRANSACTION = gql`
  mutation createPointTransaction($impUid: String!, $amount: Float!) {
    createPointTransaction(impUid: $impUid, amount: $amount) {
      id
      impUid
      amount
    }
  }
`;

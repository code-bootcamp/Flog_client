import { gql } from "@apollo/client";

export const UPDATE_USER = gql`
  mutation updateUser($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      id
      email
      url
      phoneNumber
    }
  }
`;
export const FETCH_USER = gql`
  query fetchUser {
    fetchUser {
      email
      nickName
      url
      phoneNumber
    }
  }
`;
export const UPLOAD_FILE = gql`
  mutation uploadProfileImagefile($file: Upload!) {
    uploadProfileImagefile(file: $file)
  }
`;

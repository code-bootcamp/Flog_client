import { gql } from "@apollo/client";

export const UPLOAD_FILE = gql`
  mutation uploadBoardImagefile($file: Upload!) {
    uploadBoardImagefile(file: $file)
  }
`;

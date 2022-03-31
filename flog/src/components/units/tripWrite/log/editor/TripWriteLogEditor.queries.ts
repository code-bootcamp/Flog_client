import { gql } from "@apollo/client";

export const UPLOAD_FILE = gql`
  mutation uploadBoardImagefile($file: Upload!) {
    uploadBoardImagefile(file: $file)
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
export const UPDATE_BOARD = gql`
  mutation updateBoard($updateBoardInput: UpdateBoardInput!,$boardId: String!) {
    updateBoard(updateBoardInput: $updateBoardInput, boardId: $boardId ) {
      day
      content
    } 
  }
`

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!,$scheduleId: String!) {
    createBoard(createBoardInput: $createBoardInput, scheduleId: $scheduleId ) {
      id
      day
      content
    } 
  }
`
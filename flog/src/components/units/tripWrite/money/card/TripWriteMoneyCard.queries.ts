import { gql } from "@apollo/client";

export const UPDATE_MONEYBOOK = gql`
  mutation updateMoneyBook(
    $budgetId: String!
    $moneyBookId: String!
    $updateMoneyBookInput: UpdateMoneyBookInput!
  ) {
    updateMoneyBook(
      budgetId: $budgetId
      moneyBookId: $moneyBookId
      updateMoneyBookInput: $updateMoneyBookInput
    ) {
      id
      date
      status
      context
      memo
      amount
      tripdates
    }
  }
`;

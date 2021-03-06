import { gql } from "@apollo/client";

export const FETCH_BUDGET = gql`
  query fetchBudget($scheduleId: String!) {
    fetchBudget(scheduleId: $scheduleId) {
      id
      amount
      totalAmount
    }
  }
`;

export const CREATE_BUDGET = gql`
  mutation createBudget($totalAmount: Float!, $scheduleId: String!) {
    createBudget(totalAmount: $totalAmount, scheduleId: $scheduleId) {
      id
      amount
      totalAmount
    }
  }
`;

export const UPDATE_BUDGET = gql`
  mutation updateBudget($totalAmount: Float!, $scheduleId: String!) {
    updateBudget(totalAmount: $totalAmount, scheduleId: $scheduleId) {
      id
      amount
      totalAmount
    }
  }
`;

export const FETCH_MONEY_BOOK = gql`
  query fetchMoneyBook($date: String!, $budgetId: String!) {
    fetchMoneyBook(date: $date, budgetId: $budgetId) {
      id
      date
      status
      time
      context
      memo
      amount
    }
  }
`;

export const FETCH_SCHEDULE = gql`
  query fetchSchedule($scheduleId: String!) {
    fetchSchedule(scheduleId: $scheduleId) {
      id
      title
      startDate
      endDate
      tripdates
    }
  }
`;

export const CREATE_MONEYBOOK = gql`
  mutation createMoneyBook(
    $createMoneyBookInput: CreateMoneyBookInput!
    $budgetId: String!
    $amount: Float!
  ) {
    createMoneyBook(
      createMoneyBookInput: $createMoneyBookInput
      budgetId: $budgetId
      amount: $amount
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

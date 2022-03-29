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
    }
  }
`;

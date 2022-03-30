import { gql } from "@apollo/client";

export const FETCH_SHARE_SCHEDULES = gql`
  query fetchShareSchedules($page: Float) {
    fetchShareSchedules(page: $page) {
      id
      title
      startDate
      endDate
      hashtag
      location
    }
  }
`;

export const FETCH_HASHTAG_SEARCH = gql`
  query scheduleHashTagSearch($where: String!, $hashTag: String!) {
    scheduleHashTagSearch(where: $where, hashTag: $hashTag) {
      id
      title
      startDate
      endDate
    }
  }
`;

export const FETCH_TITLE_SEARCH = gql`
  query scheduleHashTagSearch($where: String!, $search: String!) {
    scheduleHashTagSearch(where: $where, search: $search) {
      id
      title
      startDate
      endDate
    }
  }
`;

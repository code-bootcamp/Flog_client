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
      url
      thumbnailUrl
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
      location
      # url
      thumbnailUrl
    }
  }
`;

export const FETCH_TITLE_SEARCH = gql`
  query scheduleSearch($where: String!, $search: String!) {
    scheduleSearch(where: $where, search: $search) {
      id
      title
      startDate
      endDate
      location
      # url
      thumbnailUrl
    }
  }
`;

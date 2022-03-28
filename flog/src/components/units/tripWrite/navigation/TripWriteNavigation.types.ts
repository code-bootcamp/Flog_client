import { NextRouter } from "next/router";

export interface TripWriteNavigationUIProps {
  TRIP_WRITE_NAVIGATION: {
    title: string;
    url: string;
  }[];
  router: NextRouter;
  moveToPage: (page: string) => () => void;
}

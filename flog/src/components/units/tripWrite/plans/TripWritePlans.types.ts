export interface ITripWritePlansUIProps {
  tripTitleDataArray: {
    tripdates: string;
  }[];
  onDragEndReorder: (result: any) => void;
  isLoading: boolean;
  plansList: never[][];
}

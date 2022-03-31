import { useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";
import NewTripScheduleModal from "../../commons/modals/newSchedule/mainSchedule/MainSchedule.container";
import MyTripBanner from "./banner/MyTripBanner.container";
import MyTripList from "./list/MyTripList.container";
import { FETCH_SCHEDULES, FETCH_USER } from "./MyTrip.queries";

const BodyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function MyTrip() {
  const { data: myData, fetchMore } = useQuery(FETCH_SCHEDULES, {
    variables: { page: 1 },
  });

  const { data: userData } = useQuery(FETCH_USER);
  // console.log(userData?.fetchUser);

  const [newScheduleModal, setNewScheduleModal] = useState(false);

  const onClickNewScheduleModal = () => {
    setNewScheduleModal((prev) => !prev);
  };

  const onClickMore = () => {
    if (!myData) return;

    fetchMore({
      variables: {
        page: Math.ceil(myData.fetchSchedules.length / 12) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchSchedules)
          return { fetchSchedules: [...prev.fetchSchedules] };

        return {
          fetchSchedules: [
            ...prev.fetchSchedules,
            ...fetchMoreResult.fetchSchedules,
          ],
        };
      },
    });
  };

  return (
    <>
      {newScheduleModal && (
        <NewTripScheduleModal
          onClickNewScheduleModal={onClickNewScheduleModal}
        />
      )}

      <BodyContainer>
        <MyTripBanner
          userData={userData}
          onClickMapModal={onClickNewScheduleModal}
          myData={myData}
        />
        <MyTripList
          isMine={true}
          userData={userData}
          myData={myData}
          fetchMore={fetchMore}
          onClickMore={onClickMore}
        />
      </BodyContainer>
    </>
  );
}

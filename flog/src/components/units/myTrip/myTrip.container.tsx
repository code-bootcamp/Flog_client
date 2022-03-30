import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";
import NewTripScheduleModal from "../../commons/modals/newSchedule/mainSchedule/MainSchedule.container";
import MyTripBanner from "./banner/MyTripBanner.container";
import MyTripList from "./list/MyTripList.container";
const BodyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FETCH_SCHEDULES = gql`
  query fetchSchedules($page: Float) {
    fetchSchedules(page: $page) {
      id
      title
      location
      startDate
      endDate
      isShare
    }
  }
`;

const FETCH_USER = gql`
  query fetchUser {
    fetchUser {
      id
      nickName
    }
  }
`;

export default function MyTrip() {
  const { data: myData, refetch } = useQuery(FETCH_SCHEDULES, {
    variables: { page: 1 },
  });

  const { data: userData } = useQuery(FETCH_USER);
  // console.log(userData?.fetchUser);

  const [newScheduleModal, setNewScheduleModal] = useState(false);

  const onClickNewScheduleModal = () => {
    setNewScheduleModal((prev) => !prev);
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
          refetch={refetch}
        />
      </BodyContainer>
    </>
  );
}

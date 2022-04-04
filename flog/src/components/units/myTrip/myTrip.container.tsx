import { useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";
import NewTripScheduleModal from "../../commons/modals/newSchedule/mainSchedule/MainSchedule.container";
import MyTripBanner from "./banner/MyTripBanner.container";
import MyTripList from "./list/MyTripList.container";
import { FETCH_SCHEDULES, FETCH_USER } from "./MyTrip.queries";
import * as Non from "./MyTrip.styles";
import OutlinedButton01 from "../../commons/buttons/outlined/01/OutlinedButton01.container";
import { v4 as uuid4 } from "uuid";
import { useRouter } from "next/router";

const BodyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function MyTrip(props) {
  const router = useRouter();
  const { data: myData } = useQuery(FETCH_SCHEDULES, {
    variables: { page: 1 },
  });

  const { data: userData } = useQuery(FETCH_USER);

  const [newScheduleModal, setNewScheduleModal] = useState(false);

  const onClickNewScheduleModal = () => {
    setNewScheduleModal((prev) => !prev);
  };

  const onClickMoveToOurTrip = () => {
    router.push("/ourTrips");
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
        {myData?.fetchSchedules.length > 0 ? (
          <MyTripList />
        ) : (
          <Non.ListWrap>
            <Non.List>
              <Non.Text>
                지금까지{" "}
                <span style={{ fontWeight: 700, color: "#58BD97" }}>
                  16,930개
                </span>
                의 여행이
                <br />
                기록되었어요
              </Non.Text>
              <Non.TripList>
                {[1, 2, 3, 4, 5, 6].map((el) => (
                  <Non.Image key={uuid4()}>
                    <img
                      src={`/img/trips/notUser/trip-img${el}.png`}
                      alt="여행이미지"
                    />
                  </Non.Image>
                ))}
              </Non.TripList>
            </Non.List>
            <OutlinedButton01
              content="우리의 여행 보러가기"
              size="large"
              onClick={onClickMoveToOurTrip}
            />
          </Non.ListWrap>
        )}
      </BodyContainer>
    </>
  );
}

// 샘플 데이터 - API 완성 후 DB에서 데이터 받아올 수 있게 되면 삭제 예정

export const SAMPLE_DATA = [
  {
    title: {
      id: "asdf",
      day: "1",
      date: "03.30 (수)",
    },
    contents: [
      {
        id: "zxcvzxcv",
        startTime: "8:00",
        time: "1시간",
        name: "해운대 암소갈비집",
        memo: "사실 기대 안하고 그냥 갔는데 맛있었음! 로컬 맛집 인정👍 현지인의 추천 짱짱.",
      },
      {
        id: "xcvbxcvb",
        startTime: "11:30",
        time: "1시간",
        name: "광안리 해변",
        memo: "예쁨!!!",
      },
      {
        id: "cvbncvbn",
        startTime: "13:00",
        time: "30분",
        name: "세 번째 일정",
        memo: "좋아요~",
      },
      {
        id: "vbnmvbnm",
        startTime: "17:00",
        time: "1시간",
        name: "네 번째 일정",
        memo: "짱좋아요~",
      },
    ],
  },
  {
    title: {
      id: "sdfg",
      day: "2",
      date: "03.31 (목)",
    },
    contents: [
      {
        id: "asdfasdf",
        startTime: "14:00",
        time: "1시간",
        name: "깡통시장",
        memo: "",
      },
      {
        id: "sdfgsdfg",
        startTime: "17:30",
        time: "1시간 15분",
        name: "보수동 책방골목",
        memo: "숨겨진 보물창고",
      },
      {
        id: "dfghdfgh",
        startTime: "20:00",
        time: "1시간",
        name: "치맥타임",
        memo: "맛있음",
      },
    ],
  },
  {
    title: {
      id: "dfgh",
      day: "3",
      date: "04.01 (금)",
    },
    contents: [
      {
        id: "fghjfghj",
        startTime: "11:00",
        time: "2시간",
        name: "흰여울 문화마을",
        memo: "부산 최애 장소로 등극",
      },
      {
        id: "ghjkghjk",
        startTime: "13:30",
        time: "30분",
        name: "포항돼지국밥",
        memo: "서면 돼지국밥 맛집/웨이팅 있음",
      },
    ],
  },
  {
    title: {
      id: "fghj",
      day: "4",
      date: "04.02 (토)",
    },
    contents: [
      {
        id: "hjklhjkl",
        startTime: "8:00",
        time: "2시간",
        name: "어쩌구 공원",
        memo: "분위기 깡패 산책존",
      },
      {
        id: "qwerqwer",
        startTime: "11:30",
        time: "1시간",
        name: "KTX 탑승",
        memo: "돌아가기 싫다😢",
      },
    ],
  },
];

// 실제 DB에서 받아오는 데이터 형태 (가공 필요함)
export const SAMPLE_DATA_PLANS = {
  fetchDetailSchedules: [
    {
      id: "a954892c-62bd-4135-b01c-6780abd0d1ec",
      day: "1",
      date: "2022-03-31",
      startTime: "11:30",
      useTime: "1시간",
      place: "광안리 해변",
      memo: "예쁨!!!",
    },
    {
      id: "4250325d-a956-4c05-9a0b-eb81b6abc71e",
      day: "1",
      date: "2022-03-31",
      startTime: "13:30",
      useTime: "1시간",
      place: "세 번째 일정",
      memo: "좋아요~",
    },
    {
      id: "30f380d2-b245-4cfa-a681-4c24a607312c",
      day: "2",
      date: "2022-03-31",
      startTime: "14:00",
      useTime: "1시간",
      place: "깡통시장",
      memo: "",
    },
    {
      id: "8760d93b-c8e4-4224-a1c1-176b77927891",
      day: "1",
      date: "2022-03-31",
      startTime: "17:30",
      useTime: "1시간 30분",
      place: "네 번째 일정",
      memo: "좋아요~",
    },
    {
      id: "87fbb4b5-00d6-4561-8b04-37742552d496",
      day: "2",
      date: "2022-03-31",
      startTime: "17:30",
      useTime: "1시간 15분",
      place: "보수동 책방골목",
      memo: "숨겨진 보물창고",
    },
    {
      id: "1a4965df-7bd9-4297-bed3-13abf1986ee5",
      day: "1",
      date: "2022-03-31",
      startTime: "8:30",
      useTime: "1시간",
      place: "해운대 암소갈비집",
      memo: "사실 기대 안하고 그냥 갔는데 맛있었음! 로컬 맛집 인정👍 현지인의 추천 짱짱.",
    },
    {
      id: "2f70974b-33f0-4cab-a5d1-e238f8ad0bac",
      day: "2",
      date: "2022-04-01",
      startTime: "11:00",
      useTime: "2시간",
      place: "흰여울 문화마을",
      memo: "부산 최애 장소로 등극",
    },
    {
      id: "a8133f06-6625-47f4-9860-d5effe67d2e0",
      day: "3",
      date: "2022-04-01",
      startTime: "11:00",
      useTime: "2시간",
      place: "흰여울 문화마을",
      memo: "부산 최애 장소로 등극",
    },
    {
      id: "e4a843e9-0eec-4f73-b1a6-559766cf6de7",
      day: "3",
      date: "2022-04-01",
      startTime: "13:30",
      useTime: "30분",
      place: "포항돼지국밥",
      memo: "서면 돼지국밥 맛집/웨이팅 있음",
    },
    {
      id: "5da05b10-b516-4299-a350-abe3007d3855",
      day: "4",
      date: "2022-04-02",
      startTime: "11:30",
      useTime: "1시간",
      place: "KTX 탑승",
      memo: "돌아가기 싫다😢",
    },
    {
      id: "39f65921-c050-4c25-b389-fcf3dc3a7746",
      day: "4",
      date: "2022-04-02",
      startTime: "8:30",
      useTime: "2시간",
      place: "어쩌구 공원",
      memo: "분위기 깡패 산책존",
    },
  ],
};

export const SAMPLE_DATA_PLANS_TITLE = {
  fetchSchedules: [
    {
      id: "219adbc0-cf7d-4d97-bc4d-a130017d77e7",
      title: "처음으로 혼자 떠난 여행",
      location: "강릉",
      startDate: "2021.08.21",
      endDate: "2021.08.24",
      numberPeople: "ONE",
      hashtag: "ALONE",
      user: {
        id: "181bcbea-ec7c-4508-9d7c-e5ea1485127e",
        email: "test@test.com",
        nickName: "테스트",
      },
      createAt: "2022-03-27T10:27:15.942Z",
    },
  ],
};

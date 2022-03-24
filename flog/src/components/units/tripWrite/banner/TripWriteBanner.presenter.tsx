import * as Write from "./TripWriteBanner.styles";

export default function TripWriteBannerUI() {
  return (
    <Write.Banner>
      <Write.BgImage></Write.BgImage>
      <Write.Text>
        <Write.Title>나홀로 6일간 떠나는 부산 여행</Write.Title>
        <Write.SubTitle>
          2022.03.30 ~ 2022.04.04 <span>나홀로</span>
        </Write.SubTitle>
      </Write.Text>
    </Write.Banner>
  );
}

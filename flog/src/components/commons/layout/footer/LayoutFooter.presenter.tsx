import * as Footer from "./LayoutFooter.styles";

export default function LayoutFooterUI(props) {
  return (
    <Footer.Container>
      <Footer.InnerWrap>
        <Footer.LeftBox>
          <Footer.Info>
            <Footer.Title>Flog</Footer.Title>
            <Footer.Sub>
              우물 밖이 궁금한 당신을 위한 여행 종합 서비스, Flog
            </Footer.Sub>
          </Footer.Info>
          <Footer.ContactUs>
            <Footer.ContactItem>
              <Footer.ContactIconBox>
                <img src="/img/icon-footer-call.svg" alt="전화 문의 아이콘" />
              </Footer.ContactIconBox>
              <Footer.ContactTextBox>
                <p className="name">전화 문의</p>
                <p className="contact">070-000-0000</p>
              </Footer.ContactTextBox>
            </Footer.ContactItem>
            <Footer.ContactItem>
              <Footer.ContactIconBox>
                <img src="/img/icon-footer-sms.svg" alt="E-mail 문의 아이콘" />
              </Footer.ContactIconBox>
              <Footer.ContactTextBox>
                <p className="name">E-mail 문의</p>
                <p className="contact">flog@gmail.com</p>
              </Footer.ContactTextBox>
            </Footer.ContactItem>
          </Footer.ContactUs>
          <Footer.SiteMap>
            <Footer.SiteMapList>
              <li>
                <span onClick={props.onClickSiteMap("/")}>Flog</span>
              </li>
              <li>
                <span onClick={props.onClickSiteMap("/myTrips")}>
                  나의 여행
                </span>
              </li>
              <li>
                <span onClick={props.onClickSiteMap("/ourTrips")}>
                  우리의 여행
                </span>
              </li>
              <li>
                <span onClick={props.onClickSiteMap("/mypage")}>My page</span>
              </li>
            </Footer.SiteMapList>
          </Footer.SiteMap>
        </Footer.LeftBox>
        <Footer.RightBox>
          <Footer.NewsLetterTextBox>
            <p className="title">Newsletter</p>
            <p className="sub">
              Flog의 여행 큐레이션 컨텐츠를 뉴스레터로 받아보고 싶다면 아래
              메일주소를 입력해 보세요! 매주 화요일 오전에 발송됩니다.
            </p>
          </Footer.NewsLetterTextBox>
          <Footer.NewsLetterInputBox>
            이 부분은 공통 컴포넌트 merge 후 작성 예정
          </Footer.NewsLetterInputBox>
        </Footer.RightBox>
      </Footer.InnerWrap>
    </Footer.Container>
  );
}

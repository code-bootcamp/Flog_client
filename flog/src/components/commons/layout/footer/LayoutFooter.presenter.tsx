import ContainedButton03 from "../../buttons/contained/03/ContainedButton03.container";
import WithIconInput01 from "../../inputs/withIcon/01/WIthIconInput01.container";
import * as Footer from "./LayoutFooter.styles";
import { ILayoutFooterUIProps } from "./LayoutFooter.types";

export default function LayoutFooterUI(props: ILayoutFooterUIProps) {
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
            <WithIconInput01
              type="text"
              placeholder="이메일을 입력해주세요."
              iconUrl="/img/icon-input-mail.svg"
              value={props.email}
              onChange={props.onChangeNewsletterInput}
            />
            <ContainedButton03
              content="보내기"
              size="medium"
              onClick={props.onClickNewsletterSubmit}
            />
          </Footer.NewsLetterInputBox>
        </Footer.RightBox>
      </Footer.InnerWrap>
    </Footer.Container>
  );
}

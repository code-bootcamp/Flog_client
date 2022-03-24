import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  background: #e9e9e9;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const InnerWrap = styled.div`
  width: calc(100% - 30px);
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 50px 0 70px;
`;
export const LeftBox = styled.div`
  width: 50%;
  height: 100%;
`;
export const RightBox = styled.div`
  width: 50%;
  height: 100%;
`;
export const Info = styled.div`
  margin-bottom: 50px;
`;
export const Title = styled.h5`
  font-family: "Montserrat Alternates", sans-serif;
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 12px;
`;
export const Sub = styled.p`
  font-size: 0.9rem;
  color: #a9a9a9;
  line-height: 1.5em;
`;
export const ContactUs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 80px;
`;
export const ContactItem = styled.div`
  width: auto;
  height: auto;
  margin-right: 70px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const ContactIconBox = styled.div`
  width: 48px;
  height: 48px;
  background: #ffffff;
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
`;
export const ContactTextBox = styled.div`
  .name {
    font-size: 0.75rem;
    color: #9a9ea6;
    margin-bottom: 5px;
  }
  .contact {
    font-size: 0.9rem;
    color: #626262;
    font-weight: 700;
  }
`;
export const SiteMap = styled.div`
  width: 100%;
  height: auto;
`;
export const SiteMapList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  li {
    list-style: none;
    margin-right: 45px;
    cursor: pointer;
    span {
      font-size: 0.9rem;
      color: #a9a9a9;
    }
  }
`;
export const NewsLetterTextBox = styled.div`
  margin-bottom: 30px;
  .title {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 10px;
  }
  .sub {
    font-size: 0.9rem;
    color: #a9a9a9;
    line-height: 1.5em;
  }
`;
export const NewsLetterInputBox = styled.div``;

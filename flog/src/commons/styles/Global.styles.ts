import { css } from "@emotion/react";
import { breakPoints } from "./Media";

export const GlobalStyle = css`
  * {
    box-sizing: border-box;
    font-family: "Noto Sans KR", "돋움", sans-serif;
    margin: 0;
    padding: 0;
    word-break: break-all;
  }

  html {
    font-size: 18px;
  }
  @media ${breakPoints.tablet} {
    html {
      // tablet
      // rem의 기준이 되는 font-size 설정
    }
  }
  @media ${breakPoints.mobile} {
    html {
      // mobile
      // rem의 기준이 되는 font-size 설정
    }
  }

  @font-face {
    font-family: "Noto Sans KR";
    font-weight: 100;
    src: url("/fonts/NotoSansKR-Thin.woff2");
  }
  @font-face {
    font-family: "Noto Sans KR";
    font-weight: 300;
    src: url("/fonts/NotoSansKR-Light.woff2");
  }
  @font-face {
    font-family: "Noto Sans KR";
    font-weight: 400;
    src: url("/fonts/NotoSansKR-Regular.woff2");
  }
  @font-face {
    font-family: "Noto Sans KR";
    font-weight: 500;
    src: url("/fonts/NotoSansKR-Medium.woff2");
  }
  @font-face {
    font-family: "Noto Sans KR";
    font-weight: 700;
    src: url("/fonts/NotoSansKR-Bold.woff2");
  }
  @font-face {
    font-family: "Noto Sans KR";
    font-weight: 900;
    src: url("/fonts/NotoSansKR-Black.woff2");
  }
`;

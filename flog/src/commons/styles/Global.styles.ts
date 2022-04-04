import { css } from "@emotion/react";
import { breakPoints } from "./Media";

export const GlobalStyle = css`
  /* 기본 폰트 설정 */
  /* montserrat-alternates-regular - latin */
  @font-face {
    font-family: "Montserrat Alternates";
    font-style: normal;
    font-weight: 400;
    src: url("../fonts/montserrat-alternates-v16-latin-regular.woff2")
        format("woff2"),
      /* Super Modern Browsers */
        url("../fonts/montserrat-alternates-v16-latin-regular.woff")
        format("woff"); /* Modern Browsers */
  }
  /* montserrat-alternates-700 - latin */
  @font-face {
    font-family: "Montserrat Alternates";
    font-style: normal;
    font-weight: 700;
    src: url("/fonts/montserrat-alternates-v16-latin-700.woff2") format("woff2"),
      /* Super Modern Browsers */
        url("/fonts/montserrat-alternates-v16-latin-700.woff") format("woff"); /* Modern Browsers */
  }

  /* Pretendard */
  @font-face {
    font-family: "Pretendard";
    font-weight: 900;
    font-display: swap;
    src: local("Pretendard Black"),
      url("/fonts/Pretendard-Black.subset.woff2") format("woff2"),
      url("/fonts/woff-subset/Pretendard-Black.subset.woff") format("woff");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 800;
    font-display: swap;
    src: local("Pretendard ExtraBold"),
      url("/fonts/Pretendard-ExtraBold.subset.woff2") format("woff2"),
      url("/fonts/woff-subset/Pretendard-ExtraBold.subset.woff") format("woff");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 700;
    font-display: swap;
    src: local("Pretendard Bold"),
      url("/fonts/Pretendard-Bold.subset.woff2") format("woff2"),
      url("/fonts/woff-subset/Pretendard-Bold.subset.woff") format("woff");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 600;
    font-display: swap;
    src: local("Pretendard SemiBold"),
      url("/fonts/Pretendard-SemiBold.subset.woff2") format("woff2"),
      url("/fonts/woff-subset/Pretendard-SemiBold.subset.woff") format("woff");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 500;
    font-display: swap;
    src: local("Pretendard Medium"),
      url("/fonts/Pretendard-Medium.subset.woff2") format("woff2"),
      url("/fonts/woff-subset/Pretendard-Medium.subset.woff") format("woff");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 400;
    font-display: swap;
    src: local("Pretendard Regular"),
      url("/fonts/Pretendard-Regular.subset.woff2") format("woff2"),
      url("/fonts/woff-subset/Pretendard-Regular.subset.woff") format("woff");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 300;
    font-display: swap;
    src: local("Pretendard Light"),
      url("/fonts/Pretendard-Light.subset.woff2") format("woff2"),
      url("/fonts/Pretendard-Light.subset.woff") format("woff");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 200;
    font-display: swap;
    src: local("Pretendard ExtraLight"),
      url("/fonts/Pretendard-ExtraLight.subset.woff2") format("woff2"),
      url("/fonts/Pretendard-ExtraLight.subset.woff") format("woff");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 100;
    font-display: swap;
    src: local("Pretendard Thin"),
      url("/fonts/Pretendard-Thin.subset.woff2") format("woff2"),
      url("/fonts/Pretendard-Thin.subset.woff") format("woff");
  }

  /* reset */
  * {
    box-sizing: border-box;
    font-family: "Pretendard", "돋움", sans-serif;
    margin: 0;
    padding: 0;
    word-break: break-all;
  }
  button {
    color: #000000;
  }
  a {
    color: #000000;
    text-decoration: none;
  }

  /* rem 기준 설정 */
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
      font-size: 16px;
    }
  }
`;

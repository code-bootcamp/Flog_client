import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/Media";

export const Banner = styled.div`
  width: 100%;
  height: 640px;
  position: relative;
  @media ${breakPoints.mobile} {
    height: 280px;
  }
  @media ${breakPoints.tablet} {
  }
`;

export const BgImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #c6e8db;
  z-index: 0;
`;

export const BgImage2 = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 50%;
  background: linear-gradient(
    180deg,
    rgba(161, 218, 197, 0) 32.29%,
    #a1dac5 100%
  );
  z-index: 1;
`;
export const Illust1 = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  @media ${breakPoints.mobile} {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  @media ${breakPoints.tablet} {
  }

  .airplane {
    position: relative;
    top: 60px;
    width: 292px;
    height: 186px;
    @media ${breakPoints.mobile} {
      width: 150px;
      height: 100px;
      top: 20px;
      right: -10px;
    }
    @media ${breakPoints.tablet} {
    }
  }
  .cloud-small {
    position: relative;
    width: 135px;
    height: 100px;
    top: 10px;
    left: -90px;
    @media ${breakPoints.mobile} {
      width: 70px;
      height: 55px;
      top: 10px;
      left: 0px;
    }
    @media ${breakPoints.tablet} {
    }
  }
  .cloud-big {
    position: relative;
    width: 220px;
    height: 168px;
    top: 80px;
    left: 100px;
    @media ${breakPoints.mobile} {
      width: 100px;
      height: 90px;
      top: 40px;
      left: 40px;
    }
    @media ${breakPoints.tablet} {
    }
  }
`;

export const Illust2 = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  .stack {
    position: relative;
    top: 60px;
    width: 380px;
    @media ${breakPoints.mobile} {
      width: 180px;
      top: 17px;
    }
    @media ${breakPoints.tablet} {
    }
  }
`;

export const InnerWrap = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const UpperWrap = styled.div`
  height: 340px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  @media ${breakPoints.mobile} {
    height: 140px;
  }
  @media ${breakPoints.tablet} {
  }
`;

export const LowerWrap = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  @media ${breakPoints.mobile} {
    height: 140px;
  }
  @media ${breakPoints.tablet} {
  }
`;

export const Title = styled.div`
  font-size: 2.4rem;
  font-weight: 500;
  color: #2c3131;
  line-height: 120%;
  text-align: center;
  margin-bottom: 50px;
  @media ${breakPoints.mobile} {
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  @media ${breakPoints.tablet} {
  }
`;

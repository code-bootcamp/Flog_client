// import styled from "@emotion/styled";
// import { breakPoints } from "../../../../commons/styles/Media";

// export const ListWrap = styled.div`
//   width: 95%;
//   max-width: 1200px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// export const List = styled.div`
//   padding-top: 80px;

//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   @media ${breakPoints.mobile} {
//     padding-top: 30px;
//   }
//   @media ${breakPoints.tablet} {
//   }
// `;

// export const TripList = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   place-items: center;
//   grid-gap: 30px;
//   @media ${breakPoints.mobile} {
//     grid-template-columns: repeat(2, 1fr);
//     grid-gap: 8px;
//     padding-left: 8px;
//     padding-right: 8px;
//   }
//   @media ${breakPoints.tablet} {
//   }
// `;

// export const Head = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 70px;
//   @media ${breakPoints.mobile} {
//     margin-bottom: 40px;
//   }
//   @media ${breakPoints.tablet} {
//   }
// `;

// export const Label = styled.div`
//   color: #2c3131;
//   font-weight: 500;
//   font-size: 2rem;
//   @media ${breakPoints.mobile} {
//     font-weight: 400;
//     font-size: 20px;
//   }
//   @media ${breakPoints.tablet} {
//   }
// `;

// export const CardWrapper = styled.div`
//   width: 100%;
// `;

// export const Wrapper = styled.div`
//   height: 456px;
//   border-radius: 20px;
//   background: linear-gradient(
//     180deg,
//     #a9a9a9 0%,
//     rgba(233, 233, 233, 0) 29.34%
//   );
//   border: none;
//   display: flex;
//   flex-direction: column;
//   justify-content: start;
//   position: relative;
//   @media ${breakPoints.mobile} {
//     height: 240px;
//     border-radius: 10px;
//   }
//   @media ${breakPoints.tablet} {
//   }
// `;

// export const Mark = styled.div`
//   z-index: 2;
//   position: absolute;
//   img {
//     position: relative;
//     left: 32px;
//   }
//   @media ${breakPoints.mobile} {
//     img {
//       position: relative;
//       width: 17px;
//       left: 18px;
//     }
//   }
//   @media ${breakPoints.tablet} {
//   }
// `;

// export const EditWrap = styled.div`
//   z-index: 3;
//   position: absolute;
//   right: 21px;
//   img {
//     position: relative;
//     top: 21px;
//     width: 1.5rem;
//     :hover {
//       cursor: pointer;
//     }
//   }
//   @media ${breakPoints.mobile} {
//     right: 12px;
//     img {
//       width: 17px;
//       top: 10px;
//     }
//   }
//   @media ${breakPoints.tablet} {
//   }
// `;

// export const Image = styled.div`
//   width: 100%;
//   height: auto;
//   overflow: hidden;
//   position: relative;
//   border-radius: 20px;
//   z-index: 0;
//   aspect-ratio: 38 / 32.8;
//   cursor: pointer;
//   @media ${breakPoints.mobile} {
//     border-radius: 10px;
//   }
//   @media ${breakPoints.tablet} {
//   }
//   :hover {
//     img {
//       width: 100%;
//       height: 100%;
//       object-fit: cover;
//       position: relative;
//       top: 50%;
//       transform: translateY(-50%) scale(1.2);
//       transition: all 0.2s ease-in-out;
//     }
//   }
//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     position: relative;
//     top: 50%;
//     transform: translateY(-50%);
//   }
// `;

// export const Text = styled.div`
//   display: flex;
//   flex-direction: column;
//   text-align: left;
//   padding-right: 5px;
//   padding-left: 5px;
// `;

// export const Title = styled.div`
//   font-size: 1.5rem;
//   line-height: 170%;
//   padding-top: 20px;
//   word-break: keep-all;
//   @media ${breakPoints.mobile} {
//     font-weight: 300;
//     font-size: 16px;
//     padding-top: 12px;
//     line-height: 130%;
//   }
//   @media ${breakPoints.tablet} {
//   }
// `;

// export const Date = styled.li`
//   font-size: 20px;
//   color: #a9a9a9;
// `;

// export const Region = styled.li`
//   font-size: 20px;
//   color: #a9a9a9;
//   font-weight: 200;
// `;

// export const Subtitle = styled.div`
//   display: flex;
//   line-height: 140%;
//   ul {
//     li {
//       list-style: none;
//       float: left;
//       color: #a9a9a9;
//     }
//     li::before {
//       content: "|";
//       font-weight: 200;
//       margin-left: 8px;
//       margin-right: 8px;
//     }
//     li:first-of-type::before {
//       content: "";
//       margin-left: 0px;
//       margin-right: 0px;
//     }
//   }
//   .location {
//     font-weight: 200;
//   }
//   @media ${breakPoints.mobile} {
//     ul {
//       li {
//         font-size: 12px;
//         line-height: 140%;
//       }
//       li::before {
//         margin-left: 0px;
//         margin-right: 4px;
//       }
//     }
//   }
//   @media ${breakPoints.tablet} {
//   }
// `;
import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/Media";

export const ListWrap = styled.div`
  width: 95%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${breakPoints.mobile} {
    width: calc(100%-30px);
  }
  @media ${breakPoints.tablet} {
  }
`;

export const List = styled.div`
  padding-top: 80px;

  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${breakPoints.mobile} {
    padding: 40px 0px;
  }
  @media ${breakPoints.tablet} {
  }
`;

export const TripList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  grid-gap: 32px;
  padding: 80px 0px;
  @media ${breakPoints.mobile} {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 8px;
    grid-row-gap: 12px;
    padding: 40px 0px;
  }
  @media ${breakPoints.tablet} {
  }
`;

export const Head = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media ${breakPoints.mobile} {
  }
  @media ${breakPoints.tablet} {
  }
`;

export const Label = styled.div`
  color: #2c3131;
  font-weight: 500;
  font-size: 2rem;
  @media ${breakPoints.mobile} {
    font-weight: 400;
    font-size: 20px;
  }
  @media ${breakPoints.tablet} {
  }
`;

export const CardWrapper = styled.div`
  width: 100%;
`;

export const Wrapper = styled.div`
  height: 456px;
  border-radius: 20px;
  background: linear-gradient(
    180deg,
    #a9a9a9 0%,
    rgba(233, 233, 233, 0) 29.34%
  );
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: start;
  position: relative;
  @media ${breakPoints.mobile} {
    height: 240px;
    border-radius: 10px;
  }
  @media ${breakPoints.tablet} {
  }
`;

export const Mark = styled.div`
  z-index: 2;
  position: absolute;
  img {
    position: relative;
    left: 32px;
  }
  @media ${breakPoints.mobile} {
    img {
      position: relative;
      width: 17px;
      left: 18px;
    }
  }
  @media ${breakPoints.tablet} {
  }
`;

export const EditWrap = styled.div`
  z-index: 3;
  position: absolute;
  right: 21px;
  img {
    position: relative;
    top: 21px;
    width: 1.5rem;
    :hover {
      cursor: pointer;
    }
  }
  @media ${breakPoints.mobile} {
    right: 12px;
    img {
      width: 17px;
      top: 10px;
    }
  }
  @media ${breakPoints.tablet} {
  }
`;

export const Image = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  position: relative;
  border-radius: 20px;
  z-index: 0;
  aspect-ratio: 38 / 32.8;
  cursor: pointer;
  @media ${breakPoints.mobile} {
    border-radius: 10px;
  }
  @media ${breakPoints.tablet} {
  }
  :hover {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: relative;
      top: 50%;
      transform: translateY(-50%) scale(1.2);
      transition: all 0.2s ease-in-out;
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-right: 5px;
  padding-left: 5px;
`;

export const Title = styled.div`
  font-size: 1.5rem;
  line-height: 170%;
  padding-top: 20px;
  word-break: keep-all;
  @media ${breakPoints.mobile} {
    font-weight: 300;
    font-size: 16px;
    padding-top: 12px;
    line-height: 130%;
  }
  @media ${breakPoints.tablet} {
  }
`;

export const Date = styled.li`
  font-size: 20px;
  color: #a9a9a9;
`;

export const Region = styled.li`
  font-size: 20px;
  color: #a9a9a9;
  font-weight: 200;
`;

export const Subtitle = styled.div`
  display: flex;
  line-height: 140%;
  ul {
    li {
      list-style: none;
      float: left;
      color: #a9a9a9;
    }
    li::before {
      content: "|";
      font-weight: 200;
      margin-left: 8px;
      margin-right: 8px;
    }
    li:first-of-type::before {
      content: "";
      margin-left: 0px;
      margin-right: 0px;
    }
  }
  .location {
    font-weight: 200;
  }
  @media ${breakPoints.mobile} {
    ul {
      li {
        font-size: 12px;
        line-height: 140%;
      }
      li::before {
        margin-left: 0px;
        margin-right: 4px;
      }
    }
  }
  @media ${breakPoints.tablet} {
  }
`;

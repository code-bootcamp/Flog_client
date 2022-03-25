import * as P from "./Pagination01.styles";

export default function Pagination01UI() {
  return (
    <P.Pagination>
      <P.Prev>
        <button className="arrow">이전으로</button>
      </P.Prev>
      {new Array(5).fill(0).map((el, index) => (
        <P.Page key={index}>
          {index === 0 ? (
            <button className="isNow">{index + 1}</button>
          ) : (
            <button>{index + 1}</button>
          )}
        </P.Page>
      ))}
      <P.Next>
        <button className="arrow">다음으로</button>
      </P.Next>
    </P.Pagination>
  );
}

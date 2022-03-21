import * as Write from "./TripWriteNavigation.styles";

export default function TripWriteNavigationUI(props) {
  return (
    <Write.Navigation>
      <ul>
        {props.TRIP_WRITE_NAVIGATION.map((el, index: number) => (
          <>
            {el.url === props.router.asPath ? (
              <li key={el.title} className="onNow">
                <button onClick={props.onClickNav(el.url)}>{el.title}</button>
              </li>
            ) : (
              <li key={el.title}>
                <button onClick={props.onClickNav(el.url)}>{el.title}</button>
              </li>
            )}
          </>
        ))}
      </ul>
    </Write.Navigation>
  );
}

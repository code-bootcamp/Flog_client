import * as Write from "./TripWriteNavigation.styles";

export default function TripWriteNavigationUI(props) {
  return (
    <Write.Navigation>
      <Write.NavigationList>
        {props.TRIP_WRITE_NAVIGATION.map((el, index: number) => (
          <>
            {el.url === props.router.asPath ? (
              <Write.Item key={el.title} className="onNow">
                <button onClick={props.onClickNav(el.url)}>{el.title}</button>
              </Write.Item>
            ) : (
              <Write.Item key={el.title}>
                <button onClick={props.onClickNav(el.url)}>{el.title}</button>
              </Write.Item>
            )}
          </>
        ))}
      </Write.NavigationList>
    </Write.Navigation>
  );
}

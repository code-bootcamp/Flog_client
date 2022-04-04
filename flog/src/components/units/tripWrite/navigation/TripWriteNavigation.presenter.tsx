import * as Write from "./TripWriteNavigation.styles";
import { TripWriteNavigationUIProps } from "./TripWriteNavigation.types";

export default function TripWriteNavigationUI(
  props: TripWriteNavigationUIProps
) {
  return (
    <Write.Navigation>
      <Write.NavigationList>
        {props.TRIP_WRITE_NAVIGATION.map((el) => (
          <div key={el.title}>
            {props.router.asPath.includes(el.pageName) ? (
              <Write.Item key={el.title} className="onNow">
                <button onClick={props.moveToPage(el.url)}>{el.title}</button>
              </Write.Item>
            ) : (
              <Write.Item key={el.title}>
                <button onClick={props.moveToPage(el.url)}>{el.title}</button>
              </Write.Item>
            )}
          </div>
        ))}
      </Write.NavigationList>
    </Write.Navigation>
  );
}

import SvgMap from "../../../units/maps/Maps.container";
import ContainedButton01 from "../../buttons/contained/01/ContainedButton01.container";
import * as M from "./MapModal.styles";

export default function MapModal(props) {
  // //상위 컴포넌트에 넣을 내용 - MapModal
  // const [mapModal, setMapModal] = useState(false);

  // const onClickMapModal = () => {
  //   setMapModal(true);
  // };

  // const onClickExitMapModal = () => {
  //   setMapModal(false);
  // };

  // const onClickSubmitMapModal = () => {
  //   setMapModal(false);
  // };

  // return (
  // <button onClick={onClicMapModal}>map</button>
  //    {mapModal && (
  //       <MapModal
  //         onClickExit={onClickExitMapModal}
  //         onClickSubmit={onClickSubmitMapModal}
  //       />
  //     )}
  // )

  return (
    <M.Container>
      <M.ModalWrapper>
        <M.Modal>
          <SvgMap />
        </M.Modal>
      </M.ModalWrapper>
    </M.Container>
  );
}

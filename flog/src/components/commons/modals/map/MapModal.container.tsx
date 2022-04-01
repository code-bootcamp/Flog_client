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
  // <button onClick={onClickMapModal}>map</button>
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
          <M.Title>
            <div>지역을 선택하세요</div>
            <img
              src="/img/icon-modal-exit.svg"
              alt="나가기버튼"
              onClick={props.onClickExit}
            />
          </M.Title>
          <M.Subtitle>
            <M.DoName>
              {props.inputs.doName}
              {props.inputs.doName && <img src="/img/icon-right-gray.svg" />}
            </M.DoName>
            <M.CityName>{props.inputs.cityName}</M.CityName>
          </M.Subtitle>

          <SvgMap inputs={props.inputs} setInputs={props.setInputs} />
          <ContainedButton01
            content="다음"
            size="large"
            onClick={props.onClickSubmit}
          />
        </M.Modal>
      </M.ModalWrapper>
    </M.Container>
  );
}

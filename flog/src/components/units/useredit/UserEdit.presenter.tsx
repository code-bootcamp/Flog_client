import ContainedButton01 from "../../commons/buttons/contained/01/ContainedButton01.container";
import OutlinedInput01 from "../../commons/inputs/outlined/01/OutlinedInput01.container";
import * as Edit from "./UserEdit.styles";
import { IUserEditUIProps } from "./UserEdit.types";

export default function UserEditUI(props: IUserEditUIProps) {
  return (
    <Edit.Container>
      <Edit.InnerWrap>
        <Edit.Navigator>
          <span onClick={props.onClickMoveToMyPage}>마이 페이지 &gt; </span>
          <span className="now">계정 정보 수정</span>
        </Edit.Navigator>
        <Edit.Title>
          <Edit.TitleText>
            <h2>계정 정보 수정</h2>
          </Edit.TitleText>
        </Edit.Title>
        <Edit.Contents>
          <Edit.UserImage>
            <Edit.NoImage>
              <img
                src={
                  props.inputs.imgUrl
                    ? `https://storage.cloud.google.com/${props.inputs.imgUrl}`
                    : props.data?.fetchUser.url
                    ? `https://storage.cloud.google.com/${props.data?.fetchUser.url}`
                    : "/img/icon-mypage-noimage.svg"
                }
              />
            </Edit.NoImage>
            <Edit.FileButton
              onClick={() => {
                props.fileUpload.current?.click();
              }}
            >
              <img src="/img/icon-useredit-camera.svg" />
              <input
                ref={props.fileUpload}
                type="file"
                onChange={props.onClickFileUpload}
              />
            </Edit.FileButton>
          </Edit.UserImage>
          <Edit.NameInput>
            <OutlinedInput01
              type="text"
              value={
                props.inputs.name
                  ? props.inputs.name
                  : props.data?.fetchUser?.nickName
              }
              id="name"
              onChange={props.onChange}
              placeholder=""
            />
          </Edit.NameInput>

          <Edit.InputLabel>
            <span>이메일주소</span>
          </Edit.InputLabel>
          <Edit.EmailInput>
            <OutlinedInput01
              type="text"
              value={
                props.inputs.email
                  ? props.inputs.email
                  : props.data?.fetchUser?.email
              }
              id="email"
              placeholder=""
              onChange={props.onChange}
            />
          </Edit.EmailInput>

          <Edit.InputLabel>
            <span>비밀번호</span>
          </Edit.InputLabel>
          <Edit.EmailInput>
            <OutlinedInput01
              type="text"
              id="password1"
              value={props.inputs.password1}
              placeholder="비밀번호를 입력해주세요."
              onChange={props.onChange}
            />
          </Edit.EmailInput>
          <Edit.InputLabel>
            <span>비밀번호 확인</span>
          </Edit.InputLabel>
          <Edit.EmailInput>
            <OutlinedInput01
              type="text"
              id="password2"
              value={props.inputs.password2}
              placeholder="비밀번호를 입력해주세요."
              onChange={props.onChange}
            />
          </Edit.EmailInput>

          <Edit.InputLabel>
            <span>전화번호</span>
          </Edit.InputLabel>
          <Edit.PhoneInput>
            <OutlinedInput01
              type="text"
              placeholder=""
              id="number1"
              value={props.inputs.number1}
              onChange={props.onChange}
            />

            <OutlinedInput01
              type="text"
              placeholder=""
              id="number2"
              value={props.inputs.number2}
              onChange={props.onChange}
            />
            <OutlinedInput01
              type="text"
              id="number3"
              placeholder=""
              value={props.inputs.number3}
              onChange={props.onChange}
            />
          </Edit.PhoneInput>

          <Edit.SubmitBox>
            <ContainedButton01
              content="저장하기"
              size="large"
              onClick={props.onClickSubmit}
            />
          </Edit.SubmitBox>
        </Edit.Contents>
      </Edit.InnerWrap>
    </Edit.Container>
  );
}

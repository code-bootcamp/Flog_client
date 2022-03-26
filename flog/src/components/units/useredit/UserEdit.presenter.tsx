import ContainedButton01 from "../../commons/buttons/contained/01/ContainedButton01.container";
import ContainedInput01 from "../../commons/inputs/contained/01/ContainedInput01";
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
              <img src="/img/icon-mypage-noimage.svg" />
            </Edit.NoImage>
            <Edit.FileButton onClick={props.onClickFileUpload}>
              <img src="/img/icon-useredit-camera.svg" />
            </Edit.FileButton>
          </Edit.UserImage>
          <Edit.NameInput>
            <ContainedInput01 type="text" />
          </Edit.NameInput>
          <Edit.InputLabel>
            <span>전화번호</span>
          </Edit.InputLabel>
          <Edit.PhoneInput>
            <ContainedInput01 type="text" /> - <ContainedInput01 type="text" />{" "}
            - <ContainedInput01 type="text" />
          </Edit.PhoneInput>
          <Edit.InputLabel>
            <span>생년월일</span>
          </Edit.InputLabel>
          <Edit.BirthdayInput>
            <ContainedInput01 type="number" />{" "}
            <ContainedInput01 type="number" />{" "}
            <ContainedInput01 type="number" />
          </Edit.BirthdayInput>
          <Edit.InputLabel>
            <span>이메일주소</span>
          </Edit.InputLabel>
          <Edit.EmailInput>
            <ContainedInput01
              type="text"
              placeholder="이메일 주소를 입력해주세요."
            />
          </Edit.EmailInput>
          <Edit.SubmitBox>
            <ContainedButton01 content="저장하기" size="large" />
          </Edit.SubmitBox>
        </Edit.Contents>
      </Edit.InnerWrap>
    </Edit.Container>
  );
}

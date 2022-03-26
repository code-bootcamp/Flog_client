import styled from "@emotion/styled";

export const Search = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SearchBox = styled.input`
  width: 664px;
  height: 60px;
  background: #ffffff;
  border-radius: 10px;
  margin-right: 20px;
  padding: 0 24px;
  border: none;
  font-size: 16px;
  ::placeholder {
    color: #a9a9a9;
  }
  :focus {
    outline: none;
  }
`;

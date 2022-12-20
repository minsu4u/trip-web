import styled, { css } from "styled-components";

export const SearchContainer = styled.section`
  display: flex;
`;
export const SearchWrap = styled.article`
  display: flex;
`;
export const SearchInnerWrap = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #dadfe6;
  border-radius: 4px;
  min-width: 320px;
`;
export const SelectBox = styled.div`
  border: 1px solid #dadfe6;
  border-radius: 4px;
  min-width: 230px;
  box-sizing: border-box;
  ${(props) =>
    props.type === "type2" &&
    css`
      min-width: auto;
      border: 0;
    `}
  label,
  input {
    display: block;
    font-size: 14px;
  }
  & label {
    font-size: 12px;
    color: #8592a6;
    padding: 10px 0 0 16px;
  }
  & input {
    width: calc(100% - 32px);
    margin: 0 auto;
    padding-top: 10px;
    outline: none;
    border: 0;
    border-bottom: 2px solid transparent;
    :focus {
      border-bottom-color: #3264ff;
    }
  }
  &:hover {
    input {
      border-bottom-color: #3264ff;
    }
  }
`;

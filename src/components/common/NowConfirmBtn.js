import React from "react";
import styled from "styled-components";

const Btn = styled.div`
  margin-top: 16px;
  height: 38px;
  line-height: 38px;
  font-size: 16px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  background-color: #3264ff;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  padding: 0 8px;
  color: #fff;
  transition: background-color 0.2s;
  &:hover {
    background-color: #264cc2;
  }
`;

function NowConfirmBtn() {
  // 링크 버튼
  return <Btn>지금 확인하기</Btn>;
}

export default NowConfirmBtn;

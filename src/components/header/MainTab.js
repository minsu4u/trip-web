import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 52px;
  padding-bottom: 64px;
  position: relative;
  z-index: 3;
`;
const Title = styled.div``;
const MainTitle = styled.h1`
  color: #fff;
  font-size: 36px;
  font-weight: 700;
  line-height: 52px;
  text-shadow: none;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  word-break: break-word;
  text-align: center;
`;
const SubTitle = styled.div`
  display: flex;
  color: #fff;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  justify-content: center;
  margin-top: 12px;
  margin-bottom: 24px;
`;

function MainTab() {
  return (
    <Wrap>
      <Title>
        <MainTitle>여행이 필요할 때, 트립닷컴</MainTitle>
        <SubTitle>
          <span>보다 안전한 안심 결제 시스템</span>
          <span>24시간 연중무휴</span>
        </SubTitle>
      </Title>
    </Wrap>
  );
}

export default MainTab;

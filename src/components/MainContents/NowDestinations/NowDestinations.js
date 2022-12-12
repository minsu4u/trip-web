import React from "react";
import styled from "styled-components";

const Wrap = styled.article`
  margin: auto;
  padding: 24px;
  width: 1160px;
`;
const Title = styled.h1`
  color: #0f294d;
  font-size: 28px;
  font-weight: 700;
  line-height: 34px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  word-break: break-word;
  white-space: normal;
  text-align: left;
  position: relative;
  z-index: 1;
  margin-bottom: 8px;
`;
const Tag = styled.span`
  list-style: none;
  margin: 0 12px;
  display: inline-flex;
  height: 18px;
  align-items: center;
  margin-bottom: 24px;
`;

function NowDestinations() {
  return (
    <Wrap>
      <Title>지금 갈 수 있는 여행지 - 대한민국 출발</Title>
      <Tag>두 국가/지역 간 왕복 가능</Tag>
      <Tag>격리 면제 또는 격리 기간 24시간 미만</Tag>
      <Tag>특가 혜택 적용 가능</Tag>
    </Wrap>
  );
}

export default NowDestinations;

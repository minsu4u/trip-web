import React from "react";
import styled from "styled-components";

const Wrap = styled.article.attrs({ className: "wrap-inner contentsBg" })``;
const Title = styled.h1`
  color: #0f294d;
  font-weight: 700;
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
const TagWrap = styled.article.attrs({ className: "tag" })``;
const Tag = styled.span``;
const RoundBoxs = styled.div.attrs({ className: "roundBoxs" })`
  *:last-child {
    margin-right: 0;
  }
`;
const RoundBox = styled.div`
  width: 266px;
  height: 240px;
  position: relative;
  margin: 0 8px;
`;

function NowDestinations() {
  return (
    <Wrap>
      <Title>지금 갈 수 있는 여행지 - 대한민국 출발</Title>
      <TagWrap>
        <Tag>두 국가/지역 간 왕복 가능</Tag>
        <Tag>격리 면제 또는 격리 기간 24시간 미만</Tag>
        <Tag>특가 혜택 적용 가능</Tag>
      </TagWrap>
      <RoundBoxs className="">
        <RoundBox></RoundBox>
        <RoundBox></RoundBox>
        <RoundBox></RoundBox>
        <RoundBox></RoundBox>
      </RoundBoxs>
    </Wrap>
  );
}

export default NowDestinations;

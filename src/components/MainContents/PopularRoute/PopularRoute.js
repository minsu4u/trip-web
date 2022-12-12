import React from "react";
import styled from "styled-components";

const PopularRouteWrap = styled.article.attrs({
  className: "wrap-inner contentsBg",
})``;
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

function PopularRoute() {
  return (
    <PopularRouteWrap>
      <Title>인기 노선별 특가</Title>
      <TagWrap>
        <Tag>요금 잠그미</Tag>
        <Tag>가격 알리미 기능</Tag>
        <Tag>항공권 예약 보장제</Tag>
      </TagWrap>
      <div>
        <div>서울</div>
        <RoundBoxs className="">
          <RoundBox></RoundBox>
          <RoundBox></RoundBox>
          <RoundBox></RoundBox>
          <RoundBox></RoundBox>
        </RoundBoxs>
      </div>
    </PopularRouteWrap>
  );
}

export default PopularRoute;

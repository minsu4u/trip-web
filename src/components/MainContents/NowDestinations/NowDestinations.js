import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import ContentsTitle from "../../common/ContentsTitle";
import TabBtn from "../../common/TabBtn";
import { useState } from "react";

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
const RoundBoxs = styled.div.attrs({ className: "roundBoxs" })`
  & > *:last-child {
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
  const subTitle = [
    {
      txt: "두 국가/지역 간 왕복 가능",
      img: faCheck,
    },
    {
      txt: "격리 면제 또는 격리 기간 24시간 미만",
      img: faCheck,
    },
    {
      txt: "특가 혜택 적용 가능",
      img: faCheck,
    },
  ];
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Wrap>
      <ContentsTitle
        titleText="지금 갈 수 있는 여행지 - 대한민국 출발"
        subTitle={subTitle}
        imgSrc={false}
      />
      <TabBtn
        arr={["서울", "부산"]}
        tabIndex={tabIndex}
        clickHandler={setTabIndex}
      />
      <RoundBoxs className="">{tabIndex}</RoundBoxs>
    </Wrap>
  );
}

export default NowDestinations;

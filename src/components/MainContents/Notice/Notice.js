import React from "react";
import styled from "styled-components";

const NoticeWrap = styled.article.attrs({ className: "wrap-inner" })`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
  padding: 11px 16px;
  background: #fff4eb;
  border-radius: 8px;
  border: 1px solid #ffe3cf;
  box-sizing: border-box;
`;

const Title = styled.span`
  font-size: 12px;
  color: #0f294d;
  line-height: 18px;
  font-weight: 700;
  margin-right: 24px;
  max-width: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Img = styled.img.attrs({
  src: `asset/0a13r120009c5h16lE00D.webp`,
  alt: "",
})`
  margin-right: 8px;
  width: 16px;
  height: 16px;
  vertical-align: middle;
`;
const Link = styled.a`
  font-size: 12px;
  color: #455873;
  text-decoration: underline;
`;

function Notice() {
  return (
    <NoticeWrap>
      <Title>다시, 설레이는 해외여행의 시작</Title>
      <Link href="">
        <Img />
        일본은 2022년 10월 11일부터 입국 규제가 완화되어 무비자 개인 여행이
        가능해집니다.
      </Link>
    </NoticeWrap>
  );
}

export default Notice;

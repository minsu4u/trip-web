import React from "react";
import styled from "styled-components";

const Cover = styled.div`
  &:hover > .imgBox {
  }
`;
const ImgBox = styled.div.attrs({ className: "imgBox" })``;
const TxtBox = styled.div.attrs({ className: "txtBox" })``;

function HoverLoundLinkImg(props) {
  // hover round 이미지 카드
  //   1. 인자 값 {imgSrc}
  //   2. 구조
  //   2-1. 커버>이미지
  //   2-2. 커버>이미지+텍스트 박스
  return (
    <Cover>
      <ImgBox></ImgBox>
      <TxtBox></TxtBox>
    </Cover>
  );
}

export default HoverLoundLinkImg;

import React from "react";
import styled from "styled-components";

const SlideWrap = styled.article`
  width: 1160px;
  position: relative;
  margin: 82px auto 0;
`;
const Button = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border-color: rgba(218, 223, 230, 0.6);
  box-shadow: 0 8px 10px 0 rgba(15, 41, 77, 0.08);
  top: calc(50% - 20px);
  position: absolute;
  cursor: pointer;
  background: #fff;
  border: 1px solid #f0f2f5;
  box-sizing: border-box;
  text-align: center;
  display: block;
  background-size: 24px 24px;
  background-position: 50%;
  background-repeat: no-repeat;
  background-color: #fff;
`;
const PrevBtn = styled(Button)`
  left: -20px;
`;
const NextBtn = styled(Button)`
  right: -20px;
`;

const SlideContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;
const SlideBelt = styled.div.attrs({ className: "roundBoxs" })`
  a {
    display: block;
    width: calc((1160px / 3) - 16px);
    padding: 0 8px;
  }
`;

function EventSlide() {
  // 1. SlideContainer의 transform: translateX(-${넓이값*호출갯수}px);
  const slideMoveHandler = () => {
    //
  };
  return (
    <SlideWrap>
      <PrevBtn />
      <SlideContainer>
        <SlideBelt>
          <a href="">1</a>
          <a href="">2</a>
          <a href="">3</a>
          <a href="">4</a>
          <a href="">5</a>
          <a href="">6</a>
        </SlideBelt>
      </SlideContainer>
      <NextBtn onClick={slideMoveHandler} />
    </SlideWrap>
  );
}

export default EventSlide;

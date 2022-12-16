import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled, { css } from "styled-components";

const Btn = styled.div`
  position: absolute;
  top: calc(50% - 24px);
  cursor: pointer;
  border-radius: 2px;
  background: #fff;
  border: 1px solid #f0f2f5;
  box-shadow: 0 4px 8px 0 rgba(69, 88, 115, 0.14901960784313725);
  box-sizing: border-box;
  text-align: center;
  display: block;
  background-color: #fff;
  width: ${(props) => props.wd};
  height: ${(props) => props.hg};
  ${(props) =>
    props.direction === "left"
      ? css`
          left: ${props.leftValue}+ "px";
        `
      : css`
          right: ${props.rightValue}+ "px";
        `};
  &:hover {
    background-color: #3264ff;
    border: 1px solid #3264ff;
    color: #fff;
  }
`;

function SlideBtn({
  direction,
  shape,
  icon,
  wd,
  hg,
  leftValue,
  rightValue,
  clickEventHandler,
}) {
  // 방향버튼
  // 1. 인자값 : direction, shape, wd, hg, clickEventHandler
  // 2. 구조 : div>FontAwesomeIcon
  // 3. 이벤트
  //   3-1. 대상: div
  //   3-2. 시점: 클릭된 후
  //   3-3. 이벤트: 슬라이드 이동
  return (
    <Btn
      direction={direction}
      shape={shape}
      wd={wd}
      hg={hg}
      leftValue={leftValue}
      rightValue={rightValue}
      onClick={clickEventHandler}
    >
      <FontAwesomeIcon icon={icon} />
    </Btn>
  );
}

export default SlideBtn;

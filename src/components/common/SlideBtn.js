import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled, { css } from "styled-components";

const variabilCss = css`
  ${({ direction, leftValue, rightValue }) => {
    if (direction === "left")
      return css`
        left: ${leftValue}px;
      `;
    if (direction === "right")
      return css`
        right: ${rightValue}px;
      `;
  }}
`;

const Btn = styled.div`
  position: absolute;
  top: calc(50% - 24px);
  cursor: pointer;
  border-radius: ${({ round }) => round + "px"};
  background: #fff;
  border: 1px solid #f0f2f5;
  box-shadow: 0 4px 8px 0 rgba(69, 88, 115, 0.14901960784313725);
  box-sizing: border-box;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: ${({ wd }) => wd + "px"};
  height: ${({ hg }) => hg + "px"};
  ${variabilCss}
  &:hover {
    background-color: #3264ff;
    border: 1px solid #3264ff;
    color: #fff;
  }
`;

function SlideBtn({ ...props }) {
  // 방향버튼
  // 1. 인자값 : direction={"left"} round={50} icon={"icon"} wd={"40"} hg={"40"} leftValue={"20"} rightValue={"20"} clickMoveHandler
  // 2. 구조 : div>FontAwesomeIcon
  // 3. 이벤트
  //   3-1. 대상: div
  //   3-2. 시점: 클릭된 후
  //   3-3. 이벤트: 슬라이드 이동
  return (
    <Btn {...props} onClick={props?.clickMoveHandler}>
      <FontAwesomeIcon icon={props.icon} />
    </Btn>
  );
}

export default SlideBtn;

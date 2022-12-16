import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

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

const TagWrap = styled.ul`
  & > * {
    margin-right: 16px;
  }
  display: flex;
  height: 18px;
  align-items: center;
  font-size: 14px;
`;

function ContentsTitle({ titleText, subTitle, imgSrc }) {
  return (
    <>
      <Title>{titleText}</Title>
      <TagWrap>
        {subTitle.map((item, idx) => (
          <li key={idx}>
            {imgSrc ? (
              <img src={item.img} alt={item.txt} />
            ) : (
              <FontAwesomeIcon icon={item.img} />
            )}
            <span>{item.txt}</span>
          </li>
        ))}
      </TagWrap>
    </>
  );
}

export default ContentsTitle;

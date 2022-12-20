import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled, { css } from "styled-components";

const Cover = styled.div`
  width: ${(props) => props.wd}px;
  height: ${(props) => props.hg}px;
  overflow: hidden;
  border-radius: 8px;
  display: inline-block;
  position: relative;
  &:hover > .imgBox {
    transform: scale(1.1);
  }
  &:hover > .bgMask {
    opacity: 1;
  }
  &:hover > .type2 > p {
    bottom: 76px;
  }
  &:hover > .type2 > button {
    opacity: 1;
  }
  & > label {
    position: absolute;
    z-index: 3;
    left: 0;
    top: 0;
    border-top-left-radius: 8px;
    border-bottom-right-radius: 8px;
    background: rgba(15, 41, 77, 0.6);
    color: #fff;
    padding: 3px 8px;
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
    max-width: 156px;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
  }
`;
const ImgBox = styled.div`
  background: url(${(props) => props.imgSrc}) no-repeat center / cover;
  height: 100%;
  transition: all 0.2s;
  ${(props) =>
    props.type === "txt1" &&
    css`
      color: #fff;
    `}
`;
const BgMask = styled.div`
  position: absolute;
  border-radius: 8px;
  opacity: 0;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(15, 41, 77, 0.6);
  transition: opacity 0.3s;
`;
const TxtBox = styled.div`
  ${(props) =>
    props.className === "type2" &&
    css`
      box-sizing: border-box;
      padding: 16px;
      width: 100%;
      position: absolute;
      z-index: 3;
      bottom: 0;
      & > p {
        color: #fff;
        font-size: 20px;
        font-weight: 700;
        line-height: 26px;
        margin: 0;
        text-align: left;
        position: absolute;
        left: 16px;
        bottom: 16px;
        width: calc(100% - 32px);
        transition: bottom 0.2s ease-out;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        line-clamp: 2;
        -webkit-line-clamp: 2;
        word-break: break-word;
        white-space: normal;
      }
      & > button {
        background: #fff;
        border-radius: 4px;
        width: 100%;
        margin-top: 8px;
        border: none;
        padding: 8px;
        overflow: hidden;
        color: #0f294d;
        font-size: 14px;
        font-weight: 700;
        line-height: 18px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        opacity: 0;
        transition: opacity 0s 0.1s;
        cursor: pointer;
      }
      & > button > span {
        text-align: left;
      }
    `}
`;

function HoverLoundLinkImg({ ...props }) {
  return (
    <Cover type={props.type} wd={props.wd} hg={props.hg}>
      {props.type === "type2" && <label>여행가능</label>}
      <ImgBox className="imgBox" imgSrc={props.imgSrc}></ImgBox>
      {props.type === "type2" && (
        <>
          <BgMask className="bgMask"></BgMask>
          <TxtBox className="type2">
            <p>{props.country}</p>
            <button>
              <span>항공권 & 호텔 특가</span>
              <FontAwesomeIcon icon={props.icon} />
            </button>
          </TxtBox>
        </>
      )}
    </Cover>
  );
}

export default HoverLoundLinkImg;

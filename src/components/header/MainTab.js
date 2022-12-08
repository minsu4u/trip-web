import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHotel,
  faPlane,
  faTrain,
  faCar,
  faBolt,
  faPlaneDeparture,
} from "@fortawesome/free-solid-svg-icons";

const Wrap = styled.div`
  z-index: 3;
  display: flex;
  justify-content: center;
  padding-top: 52px;
  padding-bottom: 64px;
  position: relative;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.div``;
const MainTitle = styled.h1`
  color: #fff;
  font-size: 36px;
  font-weight: 700;
  line-height: 52px;
  text-shadow: none;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  word-break: break-word;
  text-align: center;
`;
const SubTitle = styled.div`
  display: flex;
  color: #fff;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  justify-content: center;
  margin-top: 12px;
  margin-bottom: 24px;
`;
const MainTabTitle = styled.ul`
  background: rgba(15, 41, 77, 0.8);
  backdrop-filter: blur(6px);
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  border-radius: 46px;
  position: relative;
  z-index: 2;
  padding: 7px;
  & > li {
    position: relative;
    padding: 5px 16px;
    margin-right: 16px;
    text-align: center;
    line-height: 21px;
    height: 22px;
    border-radius: 32px;
    color: #fff;
    cursor: pointer;
  }
  & > li:last-child {
    margin-right: 0px;
  }
`;
const MainTabRoundBox = styled.article`
  border-radius: 8px;
  padding-top: 23px;
  background-color: #fff;
`;

function MainTab() {
  return (
    <Wrap>
      <Title>
        <MainTitle>여행이 필요할 때, 트립닷컴</MainTitle>
        <SubTitle>
          <span>보다 안전한 안심 결제 시스템</span>
          <span>24시간 연중무휴</span>
        </SubTitle>
      </Title>
      <MainTabTitle>
        <li>
          <FontAwesomeIcon icon={faHotel} />
          호텔
        </li>
        <li>
          <FontAwesomeIcon icon={faPlane} />
          항공권
        </li>
        <li>
          <FontAwesomeIcon icon={faTrain} />
          기차표
        </li>
        <li>
          <FontAwesomeIcon icon={faCar} />
          렌터카·공항픽업
        </li>
        <li>
          <FontAwesomeIcon icon={faBolt} />
          액티비티
        </li>
        <li>
          <FontAwesomeIcon icon={faPlaneDeparture} />
          <FontAwesomeIcon icon={faHotel} />
          항공 + 호텔
        </li>
      </MainTabTitle>
      <MainTabRoundBox>
        <div>호텔</div>
        <div>항공권</div>
        <div>기차표</div>
        <div>렌터카.공항픽업</div>
        <div>액티비티</div>
        <div>항공+호텔</div>
      </MainTabRoundBox>
    </Wrap>
  );
}

export default MainTab;

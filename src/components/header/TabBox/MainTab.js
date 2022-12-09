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
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import TabHotel from "./TabHotel";
import TabPlane from "./TabPlane";
import TabTrain from "./TabTrain";
import TabCar from "./TabCar";
import TabBolt from "./TabBolt";
import TabPlaneDeparture from "./TabPlaneDeparture";

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
    & > svg {
      margin-right: 5px;
    }
  }
  & > li:last-child {
    margin-right: 0px;
    & > svg:first-child {
      margin-right: 0;
    }
  }
`;
const MainTabRoundBox = styled.section`
  border-radius: 8px;
  padding-top: 23px;
  background-color: #fff;
  & > article {
    display: flex;
  }
`;

function MainTab() {
  const [tabIndex, setTabIndex] = useState("0");
  const menu = [
    { name: "호텔", icon: faHotel },
    { name: "항공권", icon: faPlane },
    { name: "기차표", icon: faTrain },
    { name: "렌터카·공항픽업", icon: faCar },
    { name: "액티비티", icon: faBolt },
    { name: "항공 + 호텔", icon: [faPlaneDeparture, faHotel] },
  ];
  const tabClickHandler = (e) => {
    const selectId = e.currentTarget.id;
    setTabIndex(selectId);
  };
  const matchTabBox = (id) => {
    switch (id) {
      case "0":
        return <TabHotel />;
      case "1":
        return <TabPlane />;
      case "2":
        return <TabTrain />;
      case "3":
        return <TabCar />;
      case "4":
        return <TabBolt />;
      case "5":
        return <TabPlaneDeparture />;
      default:
        return;
    }
  };
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
        {menu.map((item, idx) => (
          <li key={idx} id={idx} onClick={tabClickHandler}>
            {!Array.isArray(item.icon) ? (
              <FontAwesomeIcon icon={item.icon} />
            ) : (
              <>
                <FontAwesomeIcon icon={item?.icon[0]} />
                <FontAwesomeIcon icon={item?.icon[1]} />
              </>
            )}
            {item.name}
          </li>
        ))}
      </MainTabTitle>
      <MainTabRoundBox>{matchTabBox(tabIndex)}</MainTabRoundBox>
    </Wrap>
  );
}

export default MainTab;
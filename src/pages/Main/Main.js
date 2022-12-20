import React from "react";
import Notice from "../../components/MainContents/Notice/Notice";
import EventSlide from "../../components/MainContents/EventSlide/EventSlide";
import Header from "../../components/Header/Header";
import NowDestinations from "../../components/MainContents/NowDestinations/NowDestinations";
import MainCommonStyles from "./CommonStyle";
import PopularRoute from "../../components/MainContents/PopularRoute/PopularRoute";
import AppDownLoad from "../../components/MainContents/AppDownLoad/AppDownLoad";
import SideBar from "../../components/common/SideBar";
import {
  faChevronUp,
  faHeadset,
  faMobileScreenButton,
  faUserPlus,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import NowConfirmBtn from "../../components/common/NowConfirmBtn";
import HoverLoundLinkImg from "../../components/common/HoverLoundLinkImg";
function Main() {
  const sidebaricons = [
    faChevronUp,
    faHeadset,
    faMobileScreenButton,
    faUserPlus,
  ];
  return (
    <div>
      <MainCommonStyles />
      <Header />
      <Notice />
      <EventSlide />
      <NowDestinations />
      <PopularRoute />
      <AppDownLoad />
      <SideBar icon={sidebaricons} />
      <div style={{ width: "300px" }}>
        <NowConfirmBtn />
      </div>
      <HoverLoundLinkImg
        wd={376}
        hg={188}
        imgSrc="./asset/0a12e120009bmggoyBE40.webp"
      />
      <HoverLoundLinkImg
        type="type2"
        wd={172}
        hg={240}
        country="홍콩"
        icon={faChevronRight}
        imgSrc="./asset/100a1f000001g4pqtBF5D_R_320_240_Q90_D.webp"
      />
    </div>
  );
}

export default Main;

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
} from "@fortawesome/free-solid-svg-icons";

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
    </div>
  );
}

export default Main;

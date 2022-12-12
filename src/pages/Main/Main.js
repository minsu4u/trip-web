import React from "react";
import Notice from "../../components/MainContents/Notice/Notice";
import EventSlide from "../../components/MainContents/EventSlide/EventSlide";
import Header from "../../components/Header/Header";
import NowDestinations from "../../components/MainContents/NowDestinations/NowDestinations";
import MainCommonStyles from "./CommonStyle";
import PopularRoute from "../../components/MainContents/PopularRoute/PopularRoute";

function Main() {
  return (
    <div>
      <MainCommonStyles />
      <Header />
      <Notice />
      <EventSlide />
      <NowDestinations />
      <PopularRoute />
    </div>
  );
}

export default Main;

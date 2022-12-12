import React from "react";
import Notice from "../components/MainContents/Notice/Notice";
import EventSlide from "../components/MainContents/EventSlide/EventSlide";
import Header from "../components/Header/Header";
import NowDestinations from "../components/MainContents/NowDestinations/NowDestinations";

function Main() {
  return (
    <div>
      <Header />
      <Notice />
      <EventSlide />
      <NowDestinations />
    </div>
  );
}

export default Main;

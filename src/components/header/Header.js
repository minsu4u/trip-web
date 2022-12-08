import React from "react";
import styled from "styled-components";
import MainTab from "./MainTab";
import Nav from "./Nav";

function Header() {
  return (
    <div
      style={{
        background:
          "url(/asset/head-banner-bg-new-1920.webp)no-repeat  center -550px / cover",
      }}
    >
      <Nav />
      <MainTab />
    </div>
  );
}

export default Header;

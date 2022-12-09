import React from "react";
import styled from "styled-components";
import Nav from "./Nav/Nav";
import MainTab from "./TabBox/MainTab";

const Wrap = styled.div`
  background: #0041c5 url(/asset/head-banner-bg-new-1920.webp) no-repeat center -550px /
    cover;
`;

function Header() {
  return (
    <Wrap>
      <Nav />
      <MainTab />
    </Wrap>
  );
}

export default Header;

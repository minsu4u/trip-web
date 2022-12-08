import React from "react";
import styled from "styled-components";
import BottomContainer from "./BottomContainer";
import TopContainer from "./TopContainer";

const Wrap = styled.div`
  max-width: 1920px;
  position: relative;
  margin: 0 auto;
`;

function Nav() {
  return (
    <Wrap>
      <TopContainer />
      <BottomContainer />
    </Wrap>
  );
}

export default Nav;

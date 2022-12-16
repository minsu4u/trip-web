import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wrap = styled.ul`
  position: fixed;
  bottom: 100px;
  right: 540px;
  z-index: 899;
`;

const SideBarBtn = styled.li`
  background-color: #3264ff;
  border-radius: 4px;
  margin-bottom: 3px;
  & > a {
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 28px;
  }
`;

function SideBar({ icon }) {
  return (
    <Wrap>
      {icon.map((item, idx) => (
        <SideBarBtn key={idx}>
          <a href="">
            <FontAwesomeIcon icon={item} />
          </a>
        </SideBarBtn>
      ))}
    </Wrap>
  );
}

export default SideBar;

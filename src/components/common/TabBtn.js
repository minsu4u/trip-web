import React from "react";
import styled from "styled-components";

const Btn = styled.li`
  border-radius: 4px;
  box-shadow: 0 8px 16px 0 rgba(15, 41, 77, 0.08);
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  line-height: 18px;
  padding: 8px 16px;
  margin-right: 16px;
  background-color: ${(props) => (props.sel ? "#0f294d" : "#fff")};
  color: ${(props) => (props.sel ? "#fff" : "#0f294d")};
`;

function TabBtn({ arr, tabIndex, clickHandler }) {
  return (
    <ul>
      {arr.map((item, idx) => (
        <Btn
          key={idx}
          id={idx}
          sel={tabIndex === idx}
          onClick={(e) => clickHandler(parseInt(e.target.id))}
        >
          {item}
        </Btn>
      ))}
    </ul>
  );
}

export default TabBtn;

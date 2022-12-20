import React from "react";
import styled from "styled-components";

const Nav = styled.nav``;
const NavUl = styled.ul`
  display: flex;
`;
const NavLi = styled.li`
  position: relative;
  padding-right: 32px;
  display: inline-block;
  &:hover > ul {
    display: block;
  }
`;
const NavLiALink = styled.a`
  text-decoration: none;
  color: #fff;
  position: relative;
  font-size: 16px;
  line-height: 18px;
  height: 18px;
  display: inline-block;
  padding: 0 0 16px;
  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    background-color: #fff;
    position: absolute;
    left: 0;
    bottom: 10px;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
  }
  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;
const NavSubUl = styled.ul`
  display: none;
  position: absolute;
  top: 30px;
  background-color: #fff;
  padding: 8px 0;
  border-radius: 4px;
  box-shadow: 0 8px 16px 0 rgba(15, 41, 77, 0.08);
`;
const NavSubLi = styled.li`
  margin: 0;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  padding: 9px 14px;
  cursor: pointer;
  &:hover {
    background: rgba(50, 100, 255, 0.08);
  }
`;
const NavSubLiALink = styled.a`
  color: #000;
  display: block;
  position: relative;
  font-size: 16px;
  line-height: 18px;
  height: 18px;
  display: inline-block;
  text-decoration: none;
  &:hover {
    color: #3264ff;
  }
`;

function BottomContainer() {
  const navList = [
    { name: "호텔", link: "/hotels/" },
    { name: "항공권", link: "/flights/" },
    { name: "액티비티", link: "/tangram/MjM4MTA=?ctm_ref=vactang_page_23810" },
    { name: "항공 + 호텔", link: "/packages/?sourceFrom=IBUBundle_home" },
    { name: "기차표", link: "/trains/" },
    {
      name: "렌터카·공항픽업",
      sub: [
        { name: "렌터카", link: "/carhire/online/home?channelid=14409" },
        { name: "공항픽업", link: "/airport-transfers/" },
      ],
    },
    { name: "트립 가이드" },
    { name: "트립닷컴 리워드" },
    { name: "프로모션" },
  ];
  return (
    <Nav>
      <NavUl>
        {navList.map((item, idx) => (
          <NavLi key={idx}>
            <NavLiALink href={item?.link}>{item.name}</NavLiALink>
            {item?.sub && (
              <NavSubUl>
                {item?.sub.map((item, idx) => (
                  <NavSubLi key={idx}>
                    <NavSubLiALink href={item?.link}>{item.name}</NavSubLiALink>
                  </NavSubLi>
                ))}
              </NavSubUl>
            )}
          </NavLi>
        ))}
      </NavUl>
    </Nav>
  );
}

export default BottomContainer;

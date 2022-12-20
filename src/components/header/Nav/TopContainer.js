import React from "react";
import styled, { css } from "styled-components";
import { FaSearch, FaMobileAlt, FaFontAwesomeFlag } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
const LeftMenuContainer = styled.div``;

const Logo = styled.a.attrs({ href: "#" })``;

const LogoImg = styled.img`
  width: 124px;
  height: 30px;
  cursor: pointer;
  padding: 16px 32px 16px 0;
  vertical-align: middle;
`;
const Search = styled.span`
  display: inline-block;
  position: relative;
  width: 300px;
  border-radius: 4px;
  box-sizing: border-box;
  border: 1px solid #dadfe6;
`;
const SearchInput = styled.input`
  width: 100%;
  height: 32px;
  border: 0;
  box-sizing: border-box;
  padding: 8px;
  padding-right: 38px;
  outline: none;
`;
const SearchButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: #3264ff;
  border-radius: 4px;
  border: 0;
  cursor: pointer;
  position: absolute;
  right: 1px;
  top: 1px;
  & > svg {
    color: white;
    vertical-align: middle;
  }
`;

const RightMenuContainer = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  & > a {
    color: #fff;
    text-decoration: none;
    margin: 16px 4px;
    padding: 8px;
    height: 34px;
    box-sizing: border-box;
    font-size: 14px;
    border: 4px;
    cursor: pointer;
    border-radius: 4px;
  }
  & > a:hover {
    color: #fff;
    background-color: hsla(0, 0%, 100%, 0.3);
  }
`;

const CustomButton = styled.a`
  background: hsla(0, 0%, 100%, 0.3);
  ${(props) =>
    props.type === "type1" &&
    css`
      &:hover {
        color: #3264ff !important;
        background-color: #fff !important;
      }
    `}
  ${(props) =>
    props.type === "type2" &&
    css`
      background-color: #fff;
      color: #0f294d !important;
      &:hover {
        color: #3264ff !important;
        background-color: #fff !important;
      }
    `}
`;

function TopContainer() {
  return (
    <Container>
      <LeftMenuContainer>
        <Logo>
          <LogoImg src="/asset/192d0a02740d20818b21c2b09c561a14.192d0a02740d20818b21c2b09c561a14.svg" />
        </Logo>
        <Search>
          <SearchInput placeholder="여행지, 명소, 호텔 등으로 검색" />
          <SearchButton>
            <FaSearch />
          </SearchButton>
        </Search>
      </LeftMenuContainer>
      <RightMenuContainer>
        <a href="#">App</a>
        <a href="#">고객센터</a>
        <a href="#">
          <FontAwesomeIcon icon={faFlag} />
        </a>
        <a href="#">KRW</a>
        <CustomButton href="#" type="type1">
          예약 검색
        </CustomButton>
        <CustomButton href="#" type="type2">
          로그인 / 회원가입
        </CustomButton>
      </RightMenuContainer>
    </Container>
  );
}

export default TopContainer;

import React from "react";
import styled from "styled-components";
import { FaSearch, FaMobileAlt, FaFontAwesomeFlag } from "react-icons/fa";
import { VscTriangleDown } from "react-icons/vsc";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ContentsBox = styled.div``;

const ATag = styled.a.attrs({ href: "#" })`
  color: #000;
  text-decoration: none;
  &:hover {
    color: #3264ff;
  }
  & > svg {
    vertical-align: middle;
  }
`;
const LogoImg = styled.img`
  width: 124px;
  height: 30px;
  cursor: pointer;
  padding: 16px 24px 14px 0;
  vertical-align: middle;
`;
const Search = styled.span`
  display: inline-block;
  position: relative;
  width: 300px;
  padding-right: 30px;
  border-radius: 4px;
  box-sizing: border-box;
  border: 1px solid #dadfe6;
`;
const SearchInput = styled.input`
  width: 100%;
  height: 32px;
  border: 0;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 8px;
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
const Split = styled.span`
  display: inline-block;
  width: 1px;
  height: 14px;
  margin: 23px 4px;
  background-color: #fff;
  border-right: 1px solid #ced2d9;
`;

function TopContainer() {
  return (
    <Container>
      <ContentsBox>
        <ATag>
          <LogoImg src="/asset/logo.png" />
        </ATag>
        <Search>
          <SearchInput placeholder="여행지, 명소, 호텔 등으로 검색" />
          <SearchButton>
            <FaSearch />
          </SearchButton>
        </Search>
      </ContentsBox>
      <ContentsBox
        style={{ fontSize: "12px", display: "flex", alignItems: "center" }}
      >
        <ATag style={{ marginRight: "10px" }}>
          <FaMobileAlt style={{ fontSize: "18px" }} />
          App
        </ATag>
        <ATag>고객센터</ATag>
        <Split />
        <ATag style={{ marginRight: "10px" }}>
          <FaFontAwesomeFlag />
          <VscTriangleDown style={{}} />
        </ATag>
        <ATag>
          KRW
          <VscTriangleDown style={{}} />
        </ATag>
        <Split />
        <ATag style={{ marginRight: "10px" }}>예약 검색</ATag>
        <ATag
          style={{
            border: "1px solid rgb(50, 100, 255)",
            padding: "5px 10px",
            borderRadius: "3px",
            color: "#3264ff",
          }}
        >
          로그인 / 회원가입
        </ATag>
      </ContentsBox>
    </Container>
  );
}

export default TopContainer;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  SearchContainer,
  SearchInnerWrap,
  SearchSelect,
  SearchWrap,
  SelectBox,
} from "./TabHotel.Styled";

function TabHotel() {
  // 호텔 (type1)
  // # 여행지 숙소 검색
  // @ 구성
  // 1. 인풋박스 검색박스
  // html 구조
  // SearchWrap > SelectBox > label> input
  // style - TabHotel.Styled.js
  return (
    <SearchContainer>
      <SearchWrap>
        <SelectBox type="type1">
          <label>여행지 또는 숙소 이름으로 검색</label>
          <input placeholder="도시, 공항, 지역, 랜드마크, 호텔 이름으로 검색"></input>
        </SelectBox>
        {/* 모달 */}
      </SearchWrap>
      <SearchWrap>
        <SearchInnerWrap>
          <SelectBox type="type2">
            <label>여행지 또는 숙소 이름으로 검색</label>
            <input placeholder="도시, 공항, 지역, 랜드마크, 호텔 이름으로 검색"></input>
          </SelectBox>
          <div>11박</div>
          <SelectBox type="type2">
            <label>여행지 또는 숙소 이름으로 검색</label>
            <input placeholder="도시, 공항, 지역, 랜드마크, 호텔 이름으로 검색"></input>
          </SelectBox>
        </SearchInnerWrap>
        {/* 모달 */}
      </SearchWrap>
    </SearchContainer>
  );
}

export default TabHotel;

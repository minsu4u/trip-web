import React from "react";
import styled from "styled-components";

const SmsEmailTabBtnWrap = styled.ul``;
const SmsEmailTabBoxWrap = styled.article``;
const SmsTabBox = styled.div``;
const SmsInputWrap = styled.div``;
const Mark = styled.span``;
const Icon = styled.span``;

function SmsEmailTab() {
  return (
    <>
      <SmsEmailTabBtnWrap>
        <button>문자 (SMS)</button>
        <button>이메일</button>
      </SmsEmailTabBtnWrap>
      <SmsEmailTabBoxWrap>
        <SmsTabBox>
          <p>
            앱 다운로드 링크가 포함된 문자 (SMS) 수신을 위해 휴대폰 번호를
            입력하세요.
          </p>
          <form onSubmit={console.log("제출")}>
            <SmsInputWrap>
              <input type="text" placeholder="휴대폰 번호" />
              <localNumBtn>
                <Mark>+82</Mark>
                <Icon></Icon>
              </localNumBtn>
            </SmsInputWrap>
            <localNumList>
              <localNumGroup>
                <localNumTxt>선택한 항목</localNumTxt>
                <localNum>대한민국 +82</localNum>
                <localNumSearch>
                  <localNumSearchIcon>icon</localNumSearchIcon>
                  <localNumSearchInput
                    type="text"
                    placeholder="국가 또는 지역"
                  />
                </localNumSearch>
              </localNumGroup>
              {/* etc... */}
            </localNumList>
            <input type="submit"></input>
          </form>
        </SmsTabBox>
      </SmsEmailTabBoxWrap>
    </>
  );
}

export default SmsEmailTab;

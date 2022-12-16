import React from "react";
import styled from "styled-components";

const SmsEmailTabBtnWrap = styled.ul``;
const SmsEmailTabBoxWrap = styled.article``;
const SmsTabBox = styled.div``;
const SmsInputWrap = styled.div``;
const Mark = styled.span``;
const Icon = styled.span``;
const LocalNumList = styled.span``;
const LocalNumGroup = styled.span``;
const LocalNumBtn = styled.span``;
const LocalNumTxt = styled.span``;
const LocalNum = styled.span``;
const LocalNumSearch = styled.span``;
const LocalNumSearchIcon = styled.span``;
const LocalNumSearchInput = styled.input``;

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
          <form onSubmit={console.log()}>
            <SmsInputWrap>
              <input type="text" placeholder="휴대폰 번호" />
              <LocalNumBtn>
                <Mark>+82</Mark>
                <Icon></Icon>
              </LocalNumBtn>
            </SmsInputWrap>
            <LocalNumList>
              <LocalNumGroup>
                <LocalNumTxt>선택한 항목</LocalNumTxt>
                <LocalNum>대한민국 +82</LocalNum>
                <LocalNumSearch>
                  <LocalNumSearchIcon>icon</LocalNumSearchIcon>
                  <LocalNumSearchInput
                    type="text"
                    placeholder="국가 또는 지역"
                  />
                </LocalNumSearch>
              </LocalNumGroup>
              {/* etc... */}
            </LocalNumList>
            <input type="submit"></input>
          </form>
        </SmsTabBox>
      </SmsEmailTabBoxWrap>
    </>
  );
}

export default SmsEmailTab;

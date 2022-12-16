import React from "react";
import SmsEmailTab from "./SmsEmailTab";
import {
  AppDownLoadBg,
  AppDownLoadContentsWrap,
  AppDownLoadLeft,
  AppLink,
  QRCode,
  AppDownLoadRight,
  SmsEmailStoreQRWrap,
  SmsEmailWrap,
  OrTxtWrap,
  StoreQRWrap,
} from "./style";

function AppDownLoad() {
  return (
    <AppDownLoadBg>
      <AppDownLoadContentsWrap className="wrap-inner">
        <AppDownLoadLeft />
        <AppDownLoadRight>
          <h1>여행이 필요할 때, 트립닷컴</h1>
          <p>
            트립닷컴 앱으로 전 세계 항공권, 호텔, 기차표, 렌터카, 공항픽업
            예약을 단 몇 초만에! 실시간 운항조회 및 유용한 여행정보, 회원전용
            시크릿 특가, 프로모션, 트립코인 적립까지 모두 앱에서 만나보세요.
            트립코인 30% 추가적립은 오직 앱에서만 가능합니다.
          </p>
          <SmsEmailStoreQRWrap>
            <SmsEmailWrap>
              <SmsEmailTab />
            </SmsEmailWrap>
            <OrTxtWrap>
              <span>또는</span>
            </OrTxtWrap>
            <StoreQRWrap>
              <div>
                <AppLink imgSrc="./asset/ios-ko-kr.png" />
                <AppLink imgSrc="./asset/android-ko-kr.png" />
              </div>
              <QRCode />
            </StoreQRWrap>
          </SmsEmailStoreQRWrap>
        </AppDownLoadRight>
      </AppDownLoadContentsWrap>
    </AppDownLoadBg>
  );
}

export default AppDownLoad;

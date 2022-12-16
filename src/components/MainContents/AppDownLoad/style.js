import styled, { css } from "styled-components";

export const AppDownLoadBg = styled.section`
  background: url(./asset/downLoadBg.webp) no-repeat 50% / 100%;
`;

export const AppDownLoadContentsWrap = styled.article``;

export const AppDownLoadLeft = styled.div`
  margin-right: 66px;
  overflow: hidden;
  height: 470px;
  &::after {
    content: "";
    display: block;
    width: 248px;
    height: 605px;
    background: #e7ebf0 url(./asset/ko-kr-main.jpg) no-repeat top center / 100%;
    border-radius: 48px;
    position: relative;
    box-shadow: -8px 8px 24px rgba(69, 88, 115, 0.32),
      inset 0 0 8px rgba(133, 146, 166, 0.5);
    border: 14px solid #e7ebf0;
    box-sizing: content-box;
  }
`;

export const AppDownLoadRight = styled.section``;
export const SmsEmailStoreQRWrap = styled.article`
  display: flex;
`;
export const SmsEmailWrap = styled.div``;

export const OrTxtWrap = styled.div``;

export const StoreQRWrap = styled.div``;

export const AppLink = styled.a`
  cursor: pointer;
  display: block;
  width: 136px;
  height: 42px;
  ${({ imgSrc }) => {
    return css`
      background: url(${imgSrc}) no-repeat center / 100%;
    `;
  }}
`;

export const QRCode = styled.div`
  width: 88px;
  height: 88px;
  position: relative;
  border-radius: 4px;
  line-height: 0;
  padding: 3.75%;
  background-color: #fff;
  background-image: url(./asset/qrLogo.png), url(./asset/qr.png);
  background-size: 18px 18px, 81px 81px;
  background-position: center, center;
  background-repeat: no-repeat;
  box-sizing: border-box;
`;

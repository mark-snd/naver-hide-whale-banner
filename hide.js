// 네이버가 "7일 내 다시보지 않기"에 쓰는 쿠키를 페이지 로드 전에 미리 심어 배너가 렌더링되지 않게 한다.
const expires = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString();
for (const key of ["whaleBannerHide", "whaleBottomBannerHide"]) {
  document.cookie = `${key}=1; expires=${expires}; path=/`;
}

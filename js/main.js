// 高さを100vhピッタリに

const fullHeight = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

window.addEventListener('resize', fullHeight);
fullHeight();

// モバイル、デスクトップを判別

const mobile =  document.querySelector("#mobile");
const desktop =  document.querySelector("#desktop");
// ユーザーエージェントを取得
const userAgent = navigator.userAgent;
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

if (isMobile) {
  console.log("This is mobile site");
  desktop.style.display = 'none';
} else {
  console.log("This is desktop site");
  mobile.style.display = 'none';
}
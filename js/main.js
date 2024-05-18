// 高さを100vhピッタリに

const fullHeight = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

window.addEventListener('resize', fullHeight);
fullHeight();

// モバイル、デスクトップを判別
const mobile = document.querySelector("#userAgentMobile");
const desktop = document.querySelector("#userAgentDesktop");
const userAgent = navigator.userAgent;
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

if (mobile && desktop) {
  if (isMobile) {
    console.log("This is mobile site");
    desktop.style.display = 'none';
  } else {
    console.log("This is desktop site");
    mobile.style.display = 'none';
  }
} else {
  console.error("Required elements are not found in the DOM.");
}

// スクロールインジゲーター
const indicatorInner = document.querySelectorAll(".indicator-inner");
const indicatorCounter = document.getElementById('indicator-counter');

// インジゲーターをスクロールと連動して100%の幅にする。
gsap.to(indicatorInner , {
  width: "100%",
  scrollTrigger: { scrub: true },
});

// インジゲーターと連動するカウンター
gsap.to(indicatorCounter, {
  innerHTML: 100,
  snap: 'innerHTML',
  scrollTrigger: { scrub: 0.4, },
  onUpdate: function() {
    let currentValue = Math.round(this.targets()[0].innerHTML);
  }
});

function updateColmnWidth() {
  var column = document.getElementsByClassName('grid-column')[0]; // 最初の要素を取得
  if (column) {
    var newWidth = column.offsetWidth;
    document.documentElement.style.setProperty("--column-width", `${newWidth}px`);
    console.log(newWidth)
  }
}
// 初期読み込み時に幅を設定
updateColmnWidth();
// リサイズイベントリスナーを追加
window.addEventListener('resize', updateColmnWidth);
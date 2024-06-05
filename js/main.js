// 高さをデバイスの画面ピッタリに
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

// aタグホバー
const links = document.querySelectorAll("a");

links.forEach((link) => {
  link.addEventListener('mousemove', () => {
    gsap.to(link, { 
      duration: 1,
      delay: 0,
      color: "var(--hover-color)",
    });
  });
  link.addEventListener('mouseleave', () => {
    gsap.to(link, {
      duration: 1,
      delay: 0,
      color: "var(--main-color)",
    });
  });
});

// リストホバー
const workInners = document.querySelectorAll(".work-inner");

workInners.forEach((workInner) => {
  const sign = workInner.querySelector(".work-sign");
  const title = workInner.querySelector(".title");

  workInner.addEventListener('mousemove', () => {
    gsap.to(title, { 
      duration: 0.08,
      delay: 0,
      x: "2rem",
    });
    gsap.to(sign, { 
      duration: 0,
      delay: 0,
      opacity: 1,
    });
  });
  workInner.addEventListener('mouseleave', () => {
    gsap.to(title, { 
      duration: 0.1,
      delay: 0,
      x: "0rem",
    });
    gsap.to(sign, { 
      duration: 0,
      delay: 0,
      opacity: 0,
    });
  });
});


gsap.to(".header" , {
  y: "70%",
  scrollTrigger: {
    trigger: "#container-1",
		scrub: 0.03,
  },
});

// カラムの幅を取得
function updateColmnWidth() {
  var column = document.getElementsByClassName('grid-column')[0];
  if (column) {
    var newWidth = column.offsetWidth;
    document.documentElement.style.setProperty("--column-width", `${newWidth}px`);
    console.log(newWidth)
  };
};
// 初期読み込み時に幅を設定
updateColmnWidth();
window.addEventListener('resize', updateColmnWidth);
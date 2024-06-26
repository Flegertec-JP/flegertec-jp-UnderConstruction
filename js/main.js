
window.onload = function() {
  window.scrollTo(0, 0);
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

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

// スムーズスクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    gsap.to(window, {
      duration: 1,
      ease: "expo.out",
      scrollTo: target,
    });
  });
});

// スクロールと連動してインジゲーターの高さを１００％に
gsap.to(indicatorInner , {
  height: "100%",
  scrollTrigger: {
    scrub: 0.3,
  },
});

// aタグホバー
const links = document.querySelectorAll("a");

links.forEach((link) => {
  link.addEventListener('mousemove', () => {
    gsap.to(link, {
      delay: 0,
      color: "var(--hover-color)",
    });
    link.style.cursor = 'pointer';
  });
  link.addEventListener('mouseleave', () => {
    gsap.to(link, {
      delay: 0,
      color: "var(--main-color)",
    });
    link.style.cursor = 'defalut';
  });
});

// リストホバー
const works = document.querySelectorAll(".work")

works.forEach((work) => {
  const workInner = work.querySelector(".work-inner");
  const sign = workInner.querySelector(".work-sign");
  const title = workInner.querySelector(".title");

  workInner.addEventListener('mouseenter', () => {
    workInner.style.cursor = 'pointer';
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
    workInner.style.cursor = 'defalut';
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
  y: "95%",
  scrollTrigger: {
    trigger: "#container-1",
		scrub: true,
  },
});

// カラムの幅を取得
function updateColmnWidth() {
  var column = document.getElementsByClassName('grid-column')[0];
  if (column) {
    var newColmnWidth = column.offsetWidth;
    document.documentElement.style.setProperty("--column-width", `${newColmnWidth}px`);
    console.log('ColmnWIdth:', newColmnWidth,)
  };
};
// リサイズ時の処理
updateColmnWidth();
window.addEventListener('resize', updateColmnWidth);

// テキスト
function updateHeaderHeight() {
  var headerContent = document.getElementsByClassName('header-content')[0];
  if (headerContent) {
    var newHeaderHeight = headerContent.offsetHeight;
    document.documentElement.style.setProperty("--header-height", `${newHeaderHeight}px`);
    console.log('HeaderContentHeight:', newHeight,)
  };
};
// リサイズ時の処理
updateHeaderHeight();
window.addEventListener('resize', updateHeaderHeight);
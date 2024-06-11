
const body = document.querySelector("html");
const loading = document.querySelector(".loading");
const loadingInner = document.querySelector(".loading-content");
const indicatorInner = document.querySelectorAll(".indicator-inner");

function isFirstTimeVisit() {
  var isFirstTime = sessionStorage.getItem("isFirstTimeVisit");
  if (!isFirstTime) {
      sessionStorage.setItem("isFirstTimeVisit", "true");
      return true;
  } else {
      return false;
  }
};

if (isFirstTimeVisit()) {
  const LoadingIndicatorTL = gsap.timeline();
  LoadingIndicatorTL.to(indicatorInner, {
    duration: 3,
    y: "0",
    height: "100%",
    ease: "power4.inOut",
  }).to(indicatorInner, {
    duration: 0.5,
    height: "0%",
    y: "300px",
    ease: "power2.inOut",
  }).to(indicatorInner, {
    delay: 0,
    duration: 0,
    y: "0", 
  });
  const LoadingTL = gsap.timeline({ delay: 3, });
  LoadingTL.to(loading, {
    duration: 0.5,
    autoAlpha: 0,
    ease: "power2.inOut",
  });
  const LoadingOverflowTL = gsap.timeline();
  LoadingOverflowTL.to(body, {
    overflow: "hidden",
    cursor: "progress",
  }).to(body, {
    delay: 3,
    duration: 0,
    overflow: "auto",
    cursor: "auto",
  });
}else{
  const LoadingIndicatorTL = gsap.timeline();
  LoadingIndicatorTL.to(indicatorInner, {
    duration: 1,
    y: "0",
    height: "100%",
    ease: "power4.inOut",
  }).to(indicatorInner, {
    duration: 0.5,
    height: "0%",
    y: "300px",
    ease: "power2.inOut",
  }).to(indicatorInner, {
    delay: 0,
    duration: 0,
    y: "0", 
  });
  const LoadingTL = gsap.timeline({ delay: 1, });
  LoadingTL.to(loading, {
    duration: 0.5,
    autoAlpha: 0,
    ease: "power2.inOut",
  });
  const LoadingOverflowTL = gsap.timeline();
  LoadingOverflowTL.to(body, {
    overflow: "hidden",
    cursor: "progress",
  }).to(body, {
    delay: 1,
    duration: 0,
    overflow: "auto",
    cursor: "auto",
  });
}
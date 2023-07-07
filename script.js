let playhead = { frame: 0, totalFrames: 0 };
let totalFrames = 0;
let animation = lottie.loadAnimation({
  container: document.querySelector("#lottieDiv1"),
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "https://assets5.lottiefiles.com/packages/lf20_gs71E2Nmb8.json",
});

console.log(animation.totalFrames);

animation.addEventListener("DOMLoaded", function () {
  // no idea why this isn't being called?
  console.log("loaded");
  console.log(animation.totalFrames);
  playhead.totalFrames = animation.totalFrames - 1;
  ScrollTrigger.refresh();
});

gsap.to(playhead, {
  frame: () => playhead.totalFrames,
  ease: "none",
  onUpdate: () => {
    console.log(
      "frame value",
      animation.totalFrames,
      "playhead value",
      playhead.frame
    );
    animation.goToAndStop(playhead.frame, true);
  },
  scrollTrigger: {
    trigger: "#ten-out-of-ten",
    start: "center center",
    end: "300% center",
    markers: true,
    scrub: 1,
    pin: true,
    invalidateOnRefresh: true,
  },
});

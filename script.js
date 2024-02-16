function loading() {
  var tl = gsap.timeline();

  tl.to(".yellow1", {
    top: "-100%",
    delay: 0.3,
    duaration: 1,
    ease: "expo.out",
  });

  tl.from(
    ".yellow2",
    {
      top: "100%",
      delay: 0.25,
      duaration: 1,
      ease: "expo.out",
    },
    "anim"
  );

  tl.to(
    "#loader h1",
    {
      color: "#000",
      delay: 0.25,
    },
    "anim"
  );

  tl.to("#loader", {
    display: "none",
    opacity: 0,
  });
}

loading();

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

document.querySelector("#footer h3").addEventListener("click", () => {
  scroll.scrollTo(0);
});

var elem = document.querySelectorAll(".elem");
var page2 = document.querySelector(".page2");
elem.forEach(function (ele) {
  ele.addEventListener("mouseenter", function () {
    var bgimg = ele.getAttribute("data-img");
    page2.style.backgroundImage = `url(${bgimg})`;
  });
});

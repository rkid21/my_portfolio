$(document).ready(function () {
    var counter = 0;
    var c = 0;
    var i = setInterval(function () {
      $(".loading-page .counter h1").html(c);
      $(".loading-page").css("width", c + "%");

      counter++;
      c++;

      if (counter == 100) {
        $(".content").fadeIn();
      }

      if (counter == 100) {
        clearInterval(i);

        $(".loading-page").fadeOut();
      }
    }, 30);
  AOS.init({
    duration: 500,
  });

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 80) {
      $(".my-nav").css({
        background: "#252734",
        transition: "700ms",
      });
    } else {
      $(".my-nav").css({
        background: "transparent",
        "border-bottom": "none",
        transition: "700ms",
      });
    }
  });
  var scroll = $(window).scrollTop();
  if (scroll > 80) {
    $(".my-nav").css({
      background: "#252734",
      transition: "700ms",
    });
  } else {
    $(".my-nav").css({
      background: "transparent",
      "border-bottom": "none",
      transition: "700ms",
    });
  }
});

const circle = document.querySelectorAll(".circle");
const circleImg = document.querySelectorAll(".hero-img img");
const imgLine1 = document.querySelectorAll(".img-line-1");
const imgLine2 = document.querySelectorAll(".img-line-2");
const heroLinks = document.querySelectorAll(".hero-links");
const line1 = document.querySelectorAll(".line-1");
const line2 = document.querySelectorAll(".line-2");
const myName = document.querySelectorAll(".my-name h1");
const description = document.querySelectorAll(".description p");
const tl = gsap.timeline();

tl.from(line1, {
  duration: 1,
  y: "-200%",
  opacity: 0,
  ease: Power2.eastInOut,
});
tl.from(
  line2,
  {
    duration: 1,
    x: "-200%",
    opacity: 0,
    ease: Power3.eastInOut,
  },
  "-=1"
);

tl.from(
  heroLinks,
  {
    duration: 1,
    opacity: 0,
    y: 20,
    ease: Power2.eastInOut,
  },
  "-=.5"
);

tl.from(
  myName,
  {
    duration: 1.4,
    opacity: 0,
    y: -50,
    ease: Power2.eastInOut,
  },
  "-=1"
);
tl.from(
  description,
  {
    duration: 0.9,
    opacity: 0,
    x: -50,
    ease: Power2.eastInOut,
  },
  "-=1"
);

tl.from(
  ".navbar-brand",
  {
    duration: 1,
    opacity: 0,
    x: "20",
  },
  "-=1"
);

tl.from(
  ".nav-item",
  {
    duration: 2,
    opacity: 0,
    stagger: 0.2,
    delay: 1.5,
  },
  "-1"
);
// RIGHT

tl.from(
  imgLine2,
  {
    duration: 1,
    opacity: 0,
    rotate: "-240",
    ease: Power2.eastInOut,
  },
  "-=1.5"
);
tl.from(
  circle,
  {
    duration: 1,
    opacity: 0,
    y: "-50%",
    ease: Power2.eastInOut,
  },
  "-=1"
);
tl.from(
  circleImg,
  {
    duration: 1,
    opacity: 0,
    x: "50%",
    ease: Power2.eastInOut,
  },
  "-=1"
);
tl.from(
  imgLine1,
  {
    duration: 0.8,
    opacity: 0,
    rotate: "-240",
    ease: Power2.eastInOut,
  },
  "-=1"
);

tl.from(
  ".social-links a",
  {
    duration: 2,
    opacity: 0,
    stagger: 0.2,
    delay: 1.5,
  },
  "-=1.5"
);

// const left = document.querySelectorAll(".left");
// const pic = document.querySelectorAll(".pic");
// const name = document.querySelectorAll(".name");
// const right = document.querySelectorAll(".right");

// var tl = gsap.timeline();

// tl.fromTo(right, {
//     width: "100%"
// }, {
//     width: "60%",
//     x: "0",
//     duration: 1.8,
//     ease: Power2.easeInOut,

// })

// tl.fromTo(left, {
//     x: "-100%"
// }, {
//     x: "0",
//     duration: 1.6,
//     ease: Power3.easeInOut,
// }, "-=1.7")

// // tl.from(left, {
// //     x: "0",
// //     duration: 1.2,
// //     ease: Power3.easeInOut,

// // }, "-=1")

// tl.fromTo(".info-wrapper", {
//     opacity: 0,
//     x: 30
// }, {
//     opacity: 1,
//     x: 0,
//     duration: .7,
//     ease: Power2.easeInOut,
// })

// tl.fromTo(pic, {
//     width: "0"
// }, {
//     width: "380px",

//     ease: Power2.easeInOut,
//     duration: 1
// }, "-=1.2")

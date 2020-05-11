$(document).ready(function () {
  // var counter = 0;
  // var c = 0;
  // var i = setInterval(function () {
  //   $(".loading-page .counter h1").html(c);
  //   $(".loading-page").css("width", c + "%");

  //   counter++;
  //   c++;

  //   if (counter == 100) {
  //     $(".content").fadeIn();
  //   }

  //   if (counter == 100) {
  //     clearInterval(i);

  //     $(".loading-page").fadeOut();
  //   }
  // }, 30);

  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000,
            function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });
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

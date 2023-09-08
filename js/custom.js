$(function () {
  particlesJS("bg", {
    particles: {
      number: {
        // value: 80,
        value: 60,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  });

  $(".menu_btn").on("click", function () {
    $(this).toggleClass("on");
    $(".cover").toggleClass("on");
  });

  // $(".cover>ul a").forEach((lnk, idx) => {
  //   lnk.on("click", () => {
  //     $(".menu_btn").removeClass("on");
  //     $(".cover").removeClass("on");
  //   });
  // });
  const COVER_A = document.querySelectorAll(".cover>ul a");
  const COVER_BTN = document.querySelector(".menu_btn");
  const COVER = document.querySelector(".cover");

  COVER_A.forEach((lnk, idx) => {
    lnk.addEventListener("click", () => {
      COVER.classList.remove("on");
      COVER_BTN.classList.remove("on");
    });
  });

  $(".cover").on("wheel", function (e) {
    e.stopPropagation();
  });

  const option = {
    anchors: [
      "intro",
      "pf01",
      "pf02",
      "pf03",
      "pf04",
      "pf05",
      "training",
      "profile",
    ],
    css: false,
    scrollOverflow: false,
    // scrollOverflow: true,
    normalScrollElements: ".content_wrap",
    afterRender: function () {
      $(".main_full section").eq(0).addClass("on");
    },
    afterLoad: function (lnk, idx) {
      $(".main_full section")
        .eq(idx - 1)
        .addClass("on")
        .siblings()
        .removeClass("on");
      if (idx == 1) {
        $(".menu_btn").addClass("wh");
      } else {
        $(".menu_btn").removeClass("wh");

        $(".menu_btn").on("click", function () {
          if ($(".cover").hasClass("on")) {
            $(".menu_btn").addClass("wh");
          } else {
            $(".menu_btn").removeClass("wh");
          }
        });
      }
      if (idx == 3 || idx == 5 || idx == 8) {
        $("h1").addClass("cb");
      } else if (idx == 6 || idx == 7) {
        $("h1").addClass("cb");
        $(".scroll_down").addClass("cb");
      } else {
        $("h1").removeClass("cb");
        $(".scroll_down").removeClass("cb");
      }
      if (idx == 8) {
        $(".scroll_down").addClass("rm");
      } else {
        $(".scroll_down").removeClass("rm");
      }
    },
    onLeave: function (idx, nidx, dir) {
      $(".gnb li")
        .eq(nidx - 1)
        .addClass("on")
        .siblings()
        .removeClass("on");
    },
  };
  $(".main_full").fullpage(option);
});

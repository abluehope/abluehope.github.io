$(function () {
  particlesJS("intro", {
    particles: {
      number: {
        value: 80,
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
        speed: 6,
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
    afterRender: function () {
      $(".main_full section").eq(0).addClass("on");
    },
    afterLoad: function (lnk, idx) {
      $(".main_full section")
        .eq(idx - 1)
        .addClass("on")
        .siblings()
        .removeClass("on");
      if (idx == 3 || idx == 5) {
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

      if (dir == "up") {
        $(".header").addClass("on");
      } else {
        $(".header").removeClass("on");
      }
    },
  };
  $(".main_full").fullpage(option);
});

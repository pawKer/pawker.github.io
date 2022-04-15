export const particlesConfig = {
  autoPlay: true,
  background: {
    color: {
      value: "#382D33",
    },
    image: "",
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover",
    opacity: 1,
  },
  backgroundMask: {
    composite: "destination-out",
    cover: {
      color: {
        value: "#fff",
      },
      opacity: 1,
    },
    enable: false,
  },
  fullScreen: {
    enable: false,
    zIndex: -1,
  },
  detectRetina: true,
  duration: 0,
  fpsLimit: 120,
  interactivity: {
    detectsOn: "window",
    events: {
      onClick: {
        enable: false,
        mode: "push",
      },
      onDiv: {
        selectors: [],
        enable: false,
        mode: [],
        type: "circle",
      },
      onHover: {
        enable: false,
        mode: "repulse",
        parallax: {
          enable: false,
          force: 2,
          smooth: 10,
        },
      },
      resize: true,
    },
    modes: {
      attract: {
        distance: 200,
        duration: 0.4,
        easing: "ease-out-quad",
        factor: 1,
        maxSpeed: 50,
        speed: 1,
      },
      bounce: {
        distance: 200,
      },
      bubble: {
        distance: 400,
        duration: 2,
        mix: false,
        opacity: 0.8,
        size: 40,
      },
      connect: {
        distance: 80,
        links: {
          opacity: 0.5,
        },
        radius: 60,
      },
      grab: {
        distance: 400,
        links: {
          blink: false,
          consent: false,
          opacity: 1,
        },
      },
      light: {
        area: {
          gradient: {
            start: {
              value: "#ffffff",
            },
            stop: {
              value: "#000000",
            },
          },
          radius: 1000,
        },
        shadow: {
          color: {
            value: "#000000",
          },
          length: 2000,
        },
      },
      push: {
        default: true,
        groups: [],
        quantity: 4,
      },
      remove: {
        quantity: 2,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
        factor: 100,
        speed: 1,
        maxSpeed: 50,
        easing: "ease-out-quad",
      },
      slow: {
        factor: 3,
        radius: 200,
      },
      trail: {
        delay: 1,
        pauseOnStop: false,
        quantity: 1,
      },
    },
  },
  manualParticles: [],
  motion: {
    disable: false,
    reduce: {
      factor: 4,
      value: true,
    },
  },
  particles: {
    bounce: {
      horizontal: {
        random: {
          enable: false,
          minimumValue: 0.1,
        },
        value: 1,
      },
      vertical: {
        random: {
          enable: false,
          minimumValue: 0.1,
        },
        value: 1,
      },
    },
    collisions: {
      bounce: {
        horizontal: {
          random: {
            enable: false,
            minimumValue: 0.1,
          },
          value: 1,
        },
        vertical: {
          random: {
            enable: false,
            minimumValue: 0.1,
          },
          value: 1,
        },
      },
      enable: false,
      mode: "bounce",
      overlap: {
        enable: true,
        retries: 0,
      },
    },
    color: {
      value: "#EDE8D4",
      animation: {
        h: {
          count: 0,
          enable: false,
          offset: 0,
          speed: 1,
          sync: true,
        },
        s: {
          count: 0,
          enable: false,
          offset: 0,
          speed: 1,
          sync: true,
        },
        l: {
          count: 0,
          enable: false,
          offset: 0,
          speed: 1,
          sync: true,
        },
      },
    },
    destroy: {
      mode: "none",
      split: {
        count: 1,
        factor: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: 3,
        },
        rate: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: {
            min: 4,
            max: 9,
          },
        },
        sizeOffset: true,
      },
    },
    gradient: [],
    groups: {},
    life: {
      count: 0,
      delay: {
        random: {
          enable: false,
          minimumValue: 0,
        },
        value: 0,
        sync: false,
      },
      duration: {
        random: {
          enable: false,
          minimumValue: 0.0001,
        },
        value: 0,
        sync: false,
      },
    },
    links: {
      blink: false,
      color: {
        value: "#ffffff",
      },
      consent: false,
      distance: 150,
      enable: false,
      frequency: 1,
      opacity: 0.4,
      shadow: {
        blur: 5,
        color: {
          value: "#00ff00",
        },
        enable: false,
      },
      triangles: {
        enable: false,
        frequency: 1,
      },
      width: 1,
      warp: false,
    },
    move: {
      angle: {
        offset: 0,
        value: 90,
      },
      attract: {
        distance: 200,
        enable: false,
        rotate: {
          x: 600,
          y: 1200,
        },
      },
      decay: 0,
      distance: {},
      direction: "none",
      drift: 0,
      enable: true,
      gravity: {
        acceleration: 9.81,
        enable: false,
        inverse: false,
        maxSpeed: 50,
      },
      path: {
        clamp: true,
        delay: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: 0,
        },
        enable: false,
        options: {},
      },
      outModes: {
        default: "destroy",
        bottom: "destroy",
        left: "destroy",
        right: "destroy",
        top: "destroy",
      },
      random: false,
      size: false,
      speed: 5,
      spin: {
        acceleration: 0,
        enable: false,
      },
      straight: false,
      trail: {
        enable: false,
        length: 10,
        fillColor: {
          value: "#000000",
        },
      },
      vibrate: false,
      warp: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
        factor: 1000,
      },
      limit: 0,
      value: 0,
    },
    opacity: {
      random: {
        enable: false,
        minimumValue: 0.1,
      },
      value: 1,
      animation: {
        count: 0,
        enable: false,
        speed: 3,
        sync: false,
        destroy: "none",
        startValue: "random",
        minimumValue: 0.1,
      },
    },
    orbit: {
      animation: {
        count: 0,
        enable: false,
        speed: 1,
        sync: false,
      },
      enable: false,
      opacity: 1,
      rotation: {
        random: {
          enable: false,
          minimumValue: 0,
        },
        value: 45,
      },
      width: 1,
    },
    reduceDuplicates: false,
    repulse: {
      random: {
        enable: false,
        minimumValue: 0,
      },
      value: 0,
      enabled: false,
      distance: 1,
      duration: 1,
      factor: 1,
      speed: 1,
    },
    roll: {
      darken: {
        enable: false,
        value: 0,
      },
      enable: false,
      enlighten: {
        enable: false,
        value: 0,
      },
      mode: "vertical",
      speed: 25,
    },
    rotate: {
      random: {
        enable: false,
        minimumValue: 0,
      },
      value: 0,
      animation: {
        enable: false,
        speed: 0,
        sync: false,
      },
      direction: "clockwise",
      path: false,
    },
    shadow: {
      blur: 0,
      color: {
        value: "#000000",
      },
      enable: false,
      offset: {
        x: 0,
        y: 0,
      },
    },
    shape: {
      options: {},
      type: "circle",
    },
    size: {
      random: {
        enable: false,
        minimumValue: 1,
      },
      value: {
        min: 0.1,
        max: 20,
      },
      animation: {
        count: 0,
        enable: true,
        speed: 5,
        sync: true,
        destroy: "max",
        startValue: "min",
        minimumValue: 0.1,
      },
    },
    stroke: {
      width: 0,
    },
    tilt: {
      random: {
        enable: false,
        minimumValue: 0,
      },
      value: 0,
      animation: {
        enable: false,
        speed: 0,
        sync: false,
      },
      direction: "clockwise",
      enable: false,
    },
    twinkle: {
      lines: {
        enable: false,
        frequency: 0.05,
        opacity: 1,
      },
      particles: {
        enable: false,
        frequency: 0.05,
        opacity: 1,
      },
    },
    wobble: {
      distance: 5,
      enable: false,
      speed: 50,
    },
    zIndex: {
      random: {
        enable: false,
        minimumValue: 0,
      },
      value: 0,
      opacityRate: 1,
      sizeRate: 1,
      velocityRate: 1,
    },
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  responsive: [],
  style: {},
  themes: [],
  zLayers: 100,
  emitters: {
    autoPlay: true,
    fill: true,
    life: {
      wait: false,
    },
    rate: {
      quantity: 2,
      delay: 0.1,
    },
    shape: "square",
    startCount: 0,
    size: {
      mode: "percent",
      height: 0,
      width: 100,
    },
    direction: "top",
    position: {
      x: 50,
      y: 100,
    },
  },
};

// {
//   autoPlay: true,
//   background: {
//     color: {
//       value: "",
//     },
//     image: "",
//     position: "",
//     repeat: "",
//     size: "",
//     opacity: 1,
//   },
//   backgroundMask: {
//     composite: "destination-out",
//     cover: {
//       color: {
//         value: "#fff",
//       },
//       opacity: 1,
//     },
//     enable: false,
//   },
//   fullScreen: {
//     enable: false,
//     zIndex: -1,
//   },
//   detectRetina: true,
//   duration: 0,
//   fpsLimit: 120,
//   interactivity: {
//     detectsOn: "window",
//     events: {
//       onClick: {
//         enable: false,
//         mode: "repulse",
//       },
//       onDiv: {
//         selectors: [],
//         enable: false,
//         mode: [],
//         type: "circle",
//       },
//       onHover: {
//         enable: false,
//         mode: "grab",
//         parallax: {
//           enable: false,
//           force: 2,
//           smooth: 10,
//         },
//       },
//       resize: true,
//     },
//     modes: {
//       attract: {
//         distance: 200,
//         duration: 0.4,
//         easing: "ease-out-quad",
//         factor: 1,
//         maxSpeed: 50,
//         speed: 1,
//       },
//       bounce: {
//         distance: 200,
//       },
//       bubble: {
//         distance: 400,
//         duration: 2,
//         mix: false,
//         opacity: 8,
//         size: 40,
//       },
//       connect: {
//         distance: 80,
//         links: {
//           opacity: 0.5,
//         },
//         radius: 60,
//       },
//       grab: {
//         distance: 200,
//         links: {
//           blink: false,
//           consent: false,
//           opacity: 1,
//         },
//       },
//       light: {
//         area: {
//           gradient: {
//             start: {
//               value: "#ffffff",
//             },
//             stop: {
//               value: "#fff",
//             },
//           },
//           radius: 1000,
//         },
//         shadow: {
//           color: {
//             value: "#fff",
//           },
//           length: 2000,
//         },
//       },
//       push: {
//         default: true,
//         groups: [],
//         quantity: 4,
//       },
//       remove: {
//         quantity: 2,
//       },
//       repulse: {
//         distance: 200,
//         duration: 0.4,
//         factor: 100,
//         speed: 1,
//         maxSpeed: 50,
//         easing: "ease-out-quad",
//       },
//       slow: {
//         factor: 3,
//         radius: 200,
//       },
//       trail: {
//         delay: 1,
//         pauseOnStop: false,
//         quantity: 1,
//       },
//     },
//   },
//   manualParticles: [],
//   motion: {
//     disable: false,
//     reduce: {
//       factor: 4,
//       value: true,
//     },
//   },
//   particles: {
//     bounce: {
//       horizontal: {
//         random: {
//           enable: false,
//           minimumValue: 0.1,
//         },
//         value: 1,
//       },
//       vertical: {
//         random: {
//           enable: false,
//           minimumValue: 0.1,
//         },
//         value: 1,
//       },
//     },
//     collisions: {
//       bounce: {
//         horizontal: {
//           random: {
//             enable: false,
//             minimumValue: 0.1,
//           },
//           value: 1,
//         },
//         vertical: {
//           random: {
//             enable: false,
//             minimumValue: 0.1,
//           },
//           value: 1,
//         },
//       },
//       enable: false,
//       mode: "bounce",
//       overlap: {
//         enable: true,
//         retries: 0,
//       },
//     },
//     color: {
//       value: ["#fe7f2d", "#fcca46", "#a1c181", "#619b8a"],
//       animation: {
//         h: {
//           count: 0,
//           enable: false,
//           offset: 0,
//           speed: 1,
//           sync: true,
//         },
//         s: {
//           count: 0,
//           enable: false,
//           offset: 0,
//           speed: 1,
//           sync: true,
//         },
//         l: {
//           count: 0,
//           enable: false,
//           offset: 0,
//           speed: 1,
//           sync: true,
//         },
//       },
//     },
//     destroy: {
//       mode: "none",
//       split: {
//         count: 1,
//         factor: {
//           random: {
//             enable: false,
//             minimumValue: 0,
//           },
//           value: 3,
//         },
//         rate: {
//           random: {
//             enable: false,
//             minimumValue: 0,
//           },
//           value: {
//             min: 4,
//             max: 9,
//           },
//         },
//         sizeOffset: true,
//       },
//     },
//     gradient: [],
//     groups: {},
//     life: {
//       count: 0,
//       delay: {
//         random: {
//           enable: false,
//           minimumValue: 0,
//         },
//         value: 0,
//         sync: false,
//       },
//       duration: {
//         random: {
//           enable: false,
//           minimumValue: 0.0001,
//         },
//         value: 0,
//         sync: false,
//       },
//     },
//     links: {
//       blink: false,
//       color: {
//         value: "#ffffff",
//       },
//       consent: false,
//       distance: 150,
//       enable: false,
//       frequency: 1,
//       opacity: 0.4,
//       shadow: {
//         blur: 5,
//         color: {
//           value: "#00ff00",
//         },
//         enable: false,
//       },
//       triangles: {
//         enable: false,
//         frequency: 1,
//       },
//       width: 1,
//       warp: false,
//     },
//     move: {
//       angle: {
//         offset: 0,
//         value: 90,
//       },
//       attract: {
//         distance: 200,
//         enable: false,
//         rotate: {
//           x: 600,
//           y: 1200,
//         },
//       },
//       decay: 0,
//       distance: {},
//       direction: "none",
//       drift: 0,
//       enable: true,
//       gravity: {
//         acceleration: 9.81,
//         enable: false,
//         inverse: false,
//         maxSpeed: 50,
//       },
//       path: {
//         clamp: true,
//         delay: {
//           random: {
//             enable: false,
//             minimumValue: 0,
//           },
//           value: 0.1,
//         },
//         enable: true,
//         options: {},
//       },
//       outModes: {
//         default: "destroy",
//         bottom: "destroy",
//         left: "destroy",
//         right: "destroy",
//         top: "destroy",
//       },
//       random: false,
//       size: false,
//       speed: 4,
//       spin: {
//         acceleration: 0,
//         enable: false,
//       },
//       straight: false,
//       trail: {
//         enable: true,
//         length: 20,
//         fillColor: {
//           value: "#000000",
//         },
//       },
//       vibrate: false,
//       warp: false,
//     },
//     number: {
//       density: {
//         enable: false,
//         area: 800,
//         factor: 1000,
//       },
//       limit: 0,
//       value: 0,
//     },
//     opacity: {
//       random: {
//         enable: false,
//         minimumValue: 0.1,
//       },
//       value: 0.5,
//       animation: {
//         count: 0,
//         enable: false,
//         speed: 1,
//         sync: false,
//         destroy: "none",
//         startValue: "random",
//         minimumValue: 0.1,
//       },
//     },
//     orbit: {
//       animation: {
//         count: 0,
//         enable: false,
//         speed: 1,
//         sync: false,
//       },
//       enable: false,
//       opacity: 1,
//       rotation: {
//         random: {
//           enable: false,
//           minimumValue: 0,
//         },
//         value: 45,
//       },
//       width: 1,
//     },
//     reduceDuplicates: false,
//     repulse: {
//       random: {
//         enable: false,
//         minimumValue: 0,
//       },
//       value: 0,
//       enabled: false,
//       distance: 1,
//       duration: 1,
//       factor: 1,
//       speed: 1,
//     },
//     roll: {
//       darken: {
//         enable: false,
//         value: 0,
//       },
//       enable: false,
//       enlighten: {
//         enable: false,
//         value: 0,
//       },
//       mode: "vertical",
//       speed: 25,
//     },
//     rotate: {
//       random: {
//         enable: false,
//         minimumValue: 0,
//       },
//       value: 0,
//       animation: {
//         enable: false,
//         speed: 0,
//         sync: false,
//       },
//       direction: "clockwise",
//       path: false,
//     },
//     shadow: {
//       blur: 0,
//       color: {
//         value: "#000000",
//       },
//       enable: false,
//       offset: {
//         x: 0,
//         y: 0,
//       },
//     },
//     shape: {
//       options: {},
//       type: "circle",
//     },
//     size: {
//       random: {
//         enable: true,
//         minimumValue: 4,
//       },
//       value: {
//         min: 4,
//         max: 7,
//       },
//       animation: {
//         count: 0,
//         enable: false,
//         speed: 40,
//         sync: false,
//         destroy: "none",
//         startValue: "random",
//         minimumValue: 0.1,
//       },
//     },
//     stroke: {
//       width: 0,
//     },
//     tilt: {
//       random: {
//         enable: false,
//         minimumValue: 0,
//       },
//       value: 0,
//       animation: {
//         enable: false,
//         speed: 0,
//         sync: false,
//       },
//       direction: "clockwise",
//       enable: false,
//     },
//     twinkle: {
//       lines: {
//         enable: false,
//         frequency: 0.05,
//         opacity: 1,
//       },
//       particles: {
//         enable: false,
//         frequency: 0.05,
//         opacity: 1,
//       },
//     },
//     wobble: {
//       distance: 5,
//       enable: false,
//       speed: 50,
//     },
//     zIndex: {
//       random: {
//         enable: false,
//         minimumValue: 0,
//       },
//       value: 0,
//       opacityRate: 1,
//       sizeRate: 1,
//       velocityRate: 1,
//     },
//   },
//   pauseOnBlur: false,
//   pauseOnOutsideViewport: true,
//   responsive: [],
//   style: {},
//   themes: [],
//   zLayers: 100,
//   emitters: {
//     autoPlay: true,
//     fill: true,
//     life: {
//       wait: false,
//     },
//     rate: {
//       quantity: 1,
//       delay: 0.1,
//     },
//     shape: "square",
//     startCount: 0,
//     size: {
//       mode: "precise",
//       height: 50,
//       width: 50,
//     },
//     position: {
//       x: 50,
//       y: 50,
//     },
//   },
// };

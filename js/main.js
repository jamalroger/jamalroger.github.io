const removeLoader = function () {
  var content = document.querySelector("#content");
  var loader = document.querySelector("#preloader");
  loader.style.display = "none";
  content.style.display = "block";
};

// animate function css
const animateCSS = function (element, animation, prefix = "animate__") {
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = prefix + animation;
    const node = document.querySelector(element);

    node.classList.add(prefix + "animated", animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd() {
      node.classList.remove(prefix + "animated", animationName);
      node.removeEventListener("animationend", handleAnimationEnd);

      resolve("Animation ended");
    }

    node.addEventListener("animationend", handleAnimationEnd);
  });
};

function afterLoaded() {
  removeLoader();
  animateCSS(".r-img", "slideInLeft");
  location.href = "#name";
  new TypeIt("#name", {
    strings: "BELHARRADI JAMAL",
    speed: 75,
    cursor: false,
    afterComplete: function (step, instance) {
      location.href = "#dev";
      new TypeIt("#dev", {
        strings: "Full stack Developer",
        speed: 50,
        cursor: false,
        afterComplete: function () {
          location.href = "#des";
          new TypeIt("#des", {
            strings:
              "web & mobile Developer using the new technologie like Laravel, Django, ExpressJS, React, Angular, Vuejs, cordova, capacitor for information,projects and contact see bellow  &#128526; &#x2193;&#x2193;",
            speed: 50,
            cursor: false,
            afterStep: async (step, instance) => {
              location.href = "#des";
            },
            afterComplete: function () {
              document.querySelector("#info").style.display = "block";
              location.href = "#info";
              animateCSS("#info", "slideInLeft");
            },
          }).go();
        },
      }).go();
    },
  }).go();
}

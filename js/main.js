const removeLoader = function(){
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
  new TypeIt("#name", {
    strings: "BELHARRADI JAMAL",
    speed: 75,
    cursor: false,
    afterComplete: function (step, instance) {
      new TypeIt("#dev", {
        strings: "Full stack Developper",
        speed: 50,
        cursor: false,
        afterComplete: function () {
          document.querySelector("#info").style.display = "block";
          animateCSS("#info", "slideInLeft");
        },
      }).go();
    },
  }).go();
}

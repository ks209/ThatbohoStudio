const fix = document.querySelector("#fix");
const navDiv = document.querySelectorAll(".nav-img");

const hyperImages = document.querySelectorAll("main img");

const vw = (coef) => window.innerWidth * (coef/100)
const vh = (coef) => window.innerHeight * (coef/100)

var count = 0;

gsap.from("#fix", {
  y: -2500,
  duration: 1,  
});


fix.addEventListener("click", function () {
  if (count === 0) {
    t1 = gsap.timeline();

    t1.to("#fix", {
      x: vw(10),
      duration: 1,
      rotate: 360,
    });

    t1.to('.nav-img',{
      opacity: 1,
    })
    count++;

    anim2Creator();
  }
})



function anim2Creator(){
  
hyperImages.forEach(function (hi, key) {
  var count = 0;
  hi.addEventListener("click", function () {
    gsap.to("nav", {
      duration: 1,
      x: -240,
      rotate: 90,
      width: window.innerHeight,
      scale: 0.55,
    });

    gsap.to(".nav-img",{
      duration:1,
      rotate: -90,
    })

    setTimeout(function () {
      console.log(key);
      switch (key) {
        case 0:
          window.location.assign("./pages/Projects/projects.html");
          break;
        case 1:
          window.location.assign("./pages/Products/products.html");
          break;
        case 2:
          window.location.assign("./pages/About/about.html");
          break;
        case 3:
          window.location.assign(
            "./pages/TravellerStories/travellerStories.html"
          );
          break;

        default:
          break;
      }
    }, 1500);
  });
});

}

const navSlide = () => {
  const burguer = document.querySelector(".burguer");
  const nav = document.querySelector(".nav-links");
  const navClose = document.querySelectorAll(".nav-anchor");

  burguer.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });

  for (i = 0; i < navClose.length; i += 1) {
    navClose[i].addEventListener("click", () => {
      nav.classList.toggle("nav-active");
    });
  }
};

navSlide();

// const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

// tl.from(".sun", {
//   x: "-110vw",
//   background: "-webkit-radial-gradient(center, #FFEF47, #FFA948)",
//   duration: 25,
// });

// document.querySelector(".nav-anchor").addEventListener("click", () => {
//   document.querySelector("a.nav-anchor").classList.add("active");
//   //   document.querySelector("a.nav-anchor").classList.add("active");
// });

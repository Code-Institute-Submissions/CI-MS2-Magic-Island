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

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".intro-beach", { x: "0%", duration: 1, delay: 3 });
tl.to(".intro-activities", { x: "0%", duration: 1, delay: 2 });
tl.to(".slider", { y: "-100%", duration: 1, delay: 2 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1.1");
tl.fromTo("nav, .hero-text", { opacity: 0 }, { opacity: 1, duration: 1 });

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

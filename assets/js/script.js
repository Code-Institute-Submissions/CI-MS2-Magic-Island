// Burguer Navigation bar
const navSlide = () => {
  const burguer = document.querySelector(".burguer");
  const nav = document.querySelector(".nav-links");
  const navClose = document.querySelectorAll(".nav-anchor");

  // Active Burguer
  burguer.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });

  // Close burguer by clicking each of the navigation bar links
  for (i = 0; i < navClose.length; i++) {
    navClose[i].addEventListener("click", () => {
      nav.classList.toggle("nav-active");
    });
  }
};

navSlide();

//Animation when load the page
// const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

// tl.to(".intro-beach", { x: "0%", duration: 0.8, delay: 3 });
// tl.to(".intro-activities", { x: "0%", duration: 0.8, delay: 2 });
// tl.to(".slider", { y: "-100%", duration: 0.8, delay: 2 });
// tl.to(".intro", { y: "-100%", duration: 0.8 }, "-=0.8");
// tl.fromTo("nav, .hero-text", { opacity: 0 }, { opacity: 1, duration: 1 });

//Animation in the footer moving a div from one to edge to another
// const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

// Chosen betwween beach, restaurant, activies

function chooseCategorie(chosen) {
  const choices = document.getElementsByClassName("choices");

  for (i = 0; i < choices.length; i++) {
    choices[i].style.display = "none";
  }

  document.getElementById(chosen).style.display = "flex";
}

function choosePlace(chosen) {
  const choices = document.getElementsByClassName("info");
  for (i = 0; i < choices.length; i++) {
    choices[i].style.display = "none";
  }

  document.getElementById(chosen).style.display = "block";
}

// tl.from(".sun", {
//   x: "-110vw",
//   background: "-webkit-radial-gradient(center, #FFEF47, #FFA948)",
//   duration: 25,
// });

// document.querySelector(".nav-anchor").addEventListener("click", () => {
//   document.querySelector("a.nav-anchor").classList.add("active");
//   //   document.querySelector("a.nav-anchor").classList.add("active");
// });

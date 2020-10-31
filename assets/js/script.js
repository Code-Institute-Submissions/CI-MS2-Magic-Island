// Skip initial animation
const skip = document.getElementById("skip-btn");
const intro = document.querySelectorAll(".intro");

skip.addEventListener("click", () => {
  for (let i = 0; i < intro.length; i++) {
    intro[i].style.display = "none";
  }
  skip.style.display = "none";
  introAnim.play("nav, .hero-text");
});

// Burguer Navigation bar
// Burguer menu inspiration from: https://www.youtube.com/watch?v=gXkqy0b4M5g
const navSlide = () => {
  const burguer = document.querySelector(".burguer");
  const nav = document.querySelector(".nav-links");
  const navClose = document.querySelectorAll(".nav-anchor");

  // Active Burguer
  burguer.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });

  // Close burguer by clicking any of the navigation bar links
  for (i = 0; i < navClose.length; i++) {
    navClose[i].addEventListener("click", () => {
      nav.classList.toggle("nav-active");
    });
  }
};

navSlide();

//Animation when load the page
const introAnim = gsap.timeline({ defaults: { ease: "power1.out" } });

introAnim.to(".intro-beach", { x: "0%", delay: 3 });
introAnim.to(".intro-activities", { x: "0%", duration: 0.8, delay: 2 });
introAnim.to(".slider", { y: "-100%", duration: 0.8, delay: 2.2 });
introAnim.to(".intro", { y: "-100%", duration: 0.8 }, "-=0.8");
introAnim.to("#skip-btn", { y: "-150%", duration: 0.2 }, "-=0.8");
// Animation only happens if the skip animation button is not clicked

introAnim.fromTo(
  "nav, .hero-text",
  { opacity: 0 },
  { opacity: 1, duration: 1 }
);

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

// Button scroll to top goes to the top of the page when clicked
const scrollToTop = document.getElementById("scroll-to-top");

scrollToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// Show up button only shows up after the first scroll
const scrollToTopShow = gsap.timeline({
  scrollTrigger: {
    trigger: ".container-about",
    star: "center center",
  },
});

scrollToTopShow.to("#scroll-to-top", {
  display: "flex",
  opacity: 1,
  duration: 1,
});

// Animating about and things to do section with scroll trigger
const showUpAbout = gsap.timeline({
  scrollTrigger: {
    trigger: ".container-about",
    start: "center bottom",
  },
});

const showUpThings = gsap.timeline({
  scrollTrigger: {
    trigger: ".container-things-to-do",
    start: "center bottom",
  },
});

//Animation only happens in large screens
if (window.matchMedia("(min-width: 1200px)").matches) {
  showUpAbout.from("#about-text p", { x: 100, opacity: 0, duration: 1.5 });

  showUpThings
    .from(".places", { x: -50, opacity: 0, duration: 1.5, stagger: 0.5 })
    .fromTo(
      ".info",
      { y: 300, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5 },
      "-=2"
    )
    .from("#map", { x: 100, opacity: 0, duration: 1.5 }, "-=2");
}

// sunAnimation only happens when the footer shows on the screen
const sunAnimation = gsap.timeline({
  scrollTrigger: {
    trigger: "footer",
    start: "center bottom",
  },
});

// Moving a div from one to edge to another

sunAnimation.from(".sun", {
  x: "-100vw",
  background: "-webkit-radial-gradient(center, #FFEF47, #FFA948)",
  duration: 25,
});

//CREDIT: Function by W3SCHOOLS - smooth scrolling (using Jquery)
// Add smooth scrolling to all links
$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    }
  });
});
//--- END CREDIT ---

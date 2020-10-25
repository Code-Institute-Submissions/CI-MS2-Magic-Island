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

// Button scroll to top
const scrollToTop = document.getElementById("scroll-to-top");

scrollToTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// Show up button only show up after first scroll
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

//Animating about and things to do section with scroll trigger

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

const sunAnimation = gsap.timeline({
  scrollTrigger: {
    trigger: "footer",
    start: "center bottom",
  },
});

sunAnimation.from(".sun", {
  x: "-100vw",
  background: "-webkit-radial-gradient(center, #FFEF47, #FFA948)",
  duration: 25,
});

$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    //CREDIT: Function by W3SCHOOLS - smooth scrolling (using Jquery)

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
          window.location.hash = (hash, scrollToTop);
        }
      );
    } // End if
  });
});
//--- END CREDIT ---

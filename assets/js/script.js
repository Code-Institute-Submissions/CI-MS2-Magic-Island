const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.from(".sun", {
  x: "100vw",
  background: "-webkit-radial-gradient(center, #FFEF47, #FFA948)",
  duration: 25,
});

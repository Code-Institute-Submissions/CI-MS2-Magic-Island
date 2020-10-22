function sendMail(contactForm) {
  emailjs
    .send("Henrique Peroni", "magic_island", {
      from_fname: contactForm.fname.value,
      from_lname: contactForm.lname.value,
      from_email: contactForm.email.value,
      message: contactForm.message.value,
    })
    .then(
      function (response) {
        console.log("SUCCESS", response);
      },
      function (error) {
        console.log("FAILED", error);
      }
    );
  return false;
}

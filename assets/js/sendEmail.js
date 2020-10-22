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
        startModal();
        refresh();
        console.log("SUCCESS", response);
      },
      function (error) {
        alert("Sorry, it seems we have a problem. Please try again", error);
      }
    );
  return false;
}

// Refresh the page when the form is submited
function refresh() {
  document.getElementById("contactForm").reset();
}

// Modal PopUp

function startModal() {
  const modal = document.getElementById("modal-contact");

  modal.classList.add("show-modal");

  modal.addEventListener("click", (e) => {
    if (e.target.id == "modal-contact" || e.target.className == "close-modal") {
      modal.classList.remove("show-modal");
    }
  });
}

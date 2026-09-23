const contactForm = document.getElementById("contact-form");
const formPopup = document.getElementById("formPopup");
const formPopupButton = document.getElementById("formPopupButton");

if (contactForm && formPopup && formPopupButton) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        formPopup.classList.add("active");

    });

    formPopupButton.addEventListener("click", function () {

        formPopup.classList.remove("active");

        contactForm.reset();

    });

}

const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {

    menuToggle.addEventListener("click", function () {

        navbar.classList.toggle("active");

        const isOpen = navbar.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.innerHTML = isOpen
            ? '<i class="fas fa-times"></i>'
            : '<i class="fas fa-bars"></i>';

    });

}


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

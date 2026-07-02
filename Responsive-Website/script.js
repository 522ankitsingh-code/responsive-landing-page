const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");
const header = document.querySelector("header");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

navItems.forEach((item) => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.15)";
    } else {
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.08)";
    }
});

const heroButton = document.querySelector(".hero-text button");

heroButton.addEventListener("click", () => {
    alert("Welcome! Thanks for visiting our website.");
});

const contactForm = document.querySelector("form");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector("textarea").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill all the fields.");
        return;
    }

    alert("Your message has been sent successfully!");

    contactForm.reset();
});
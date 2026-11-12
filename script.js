const text = document.querySelector(".text-animation span");

const words = [
    "Business Analyst",
    "Business Consultant"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (isDeleting) {

        text.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

    } else {

        text.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

    }

    let speed = isDeleting ? 70 : 100;

    if (!isDeleting && charIndex === currentWord.length) {

        speed = 1000;
        isDeleting = true;

    } else if (isDeleting && charIndex === 0) {

        isDeleting = false;

        wordIndex++;

        if (wordIndex === words.length) {
            wordIndex = 0;
        }

        speed = 500;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

/* =========================
   NAVBAR & MOBILE MENU
========================= */

const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar a");

/* MOBILE MENU */

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
});

/* CLOSE MENU AFTER CLICKING A LINK */

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        menuIcon.classList.remove("bx-x");
        navbar.classList.remove("active");
    });
});

/* ACTIVE NAVBAR ON SCROLL */

function updateActiveNav() {
    const scrollPosition = window.scrollY + 150;

    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (
            scrollPosition >= top &&
            scrollPosition < top + height
        ) {
            navLinks.forEach(link => {
                link.classList.remove("active");

                if (link.getAttribute("href") === "#" + id) {
                    link.classList.add("active");
                }
            });
        }
    });
}

window.addEventListener("scroll", updateActiveNav);
updateActiveNav();

// Order Button
function buyProduct(productName) {
    alert("Thank you for choosing " + productName + "!\n\nPlease contact us to place your order.");
}

// Contact Form
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("✅ Thank you! Your message has been sent successfully.");

    contactForm.reset();
});

// Smooth animation when scrolling
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const position = section.getBoundingClientRect().top;
        const screen = window.innerHeight;

        if (position < screen - 150) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
});

// Set initial animation
sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.8s ease";
});

// Hero section should appear immediately
const hero = document.querySelector(".hero");
hero.style.opacity = "1";
hero.style.transform = "translateY(0)";
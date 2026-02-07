// Function for smooth scrolling
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}

// Navbar buttons
document.getElementById("Home").addEventListener("click", function(e) {
    e.preventDefault();
    scrollToSection("home");
});

document.getElementById("Package").addEventListener("click", function(e) {
    e.preventDefault();
    scrollToSection("package-container");
});

document.getElementById("Destination").addEventListener("click", function(e) {
    e.preventDefault();
    scrollToSection("destination-container");
});

document.getElementById("Contact").addEventListener("click", function(e) {
    e.preventDefault();
    scrollToSection("footer");
});

// "Let's go now" button → scroll to signup form
document.getElementById("scroll-signup").addEventListener("click", function() {
    scrollToSection("Signupform");
});

// Responsive Menu Toggle (if you're using bx-menu)
const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
});




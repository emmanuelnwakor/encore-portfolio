// Sticky Navbar
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (header) {
    header.classList.toggle("sticky", window.scrollY > 0);
  }
});

// Smooth scroll for nav links
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }

    // Close the side nav after clicking
    const sideNav = document.getElementById("side-nav");
    if (sideNav) {
      sideNav.classList.remove("active");
    }
  });
});

// Toggle nav on logo click
const logoToggle = document.getElementById("logo-toggle");
if (logoToggle) {
  logoToggle.addEventListener("click", () => {
    const sideNav = document.getElementById("side-nav");
    if (sideNav) {
      sideNav.classList.toggle("active");
    }
  });
}

// Close nav if user clicks outside it
document.addEventListener("click", function (event) {
  const sideNav = document.getElementById("side-nav");
  const logoToggle = document.getElementById("logo-toggle");

  if (
    sideNav &&
    sideNav.classList.contains("active") &&
    !sideNav.contains(event.target) &&
    !logoToggle.contains(event.target)
  ) {
    sideNav.classList.remove("active");
  }
});

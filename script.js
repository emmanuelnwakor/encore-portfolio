// Sticky Navbar
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Smooth scroll for nav links + auto-close side nav
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }

    // Close the side nav after clicking a link
    document.getElementById("side-nav").classList.remove("active");
  });
});

// Toggle side nav on hamburger (logo-toggle) click
document.getElementById("logo-toggle").addEventListener("click", (e) => {
  e.stopPropagation(); // Prevents event bubbling from closing nav instantly
  const sideNav = document.getElementById("side-nav");
  sideNav.classList.toggle("active");
});

// Close nav when clicking outside of it
document.addEventListener("click", (e) => {
  const sideNav = document.getElementById("side-nav");
  const toggle = document.getElementById("logo-toggle");

  // If nav is open and the click is outside nav and toggle button
  if (sideNav.classList.contains("active") &&
      !sideNav.contains(e.target) &&
      !toggle.contains(e.target)) {
    sideNav.classList.remove("active");
  }
});

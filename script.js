// Sticky Navbar
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 0);
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
    document.getElementById("side-nav").classList.remove("active");
  });
});

// Toggle nav on logo click
document.getElementById("logo-toggle").addEventListener("click", () => {
  const sideNav = document.getElementById("side-nav");
  sideNav.classList.toggle("active");
});

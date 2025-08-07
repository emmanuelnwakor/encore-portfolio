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
    section.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Placeholder form handler (you can replace this with real submission later)
document.querySelector('.contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Thank you! Your message has been received.");
  this.reset();
});

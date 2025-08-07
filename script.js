<script>
  document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".header");
    const logoToggle = document.getElementById("logo-toggle");
    const sideNav = document.getElementById("side-nav");

    // Sticky Navbar
    window.addEventListener("scroll", () => {
      if (header) {
        header.classList.toggle("sticky", window.scrollY > 0);
      }
    });

    // Toggle mobile nav
    if (logoToggle && sideNav) {
      logoToggle.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent immediate close
        sideNav.classList.toggle("active");
      });
    }

    // Close nav when clicking outside
    document.addEventListener("click", (e) => {
      if (
        sideNav &&
        sideNav.classList.contains("active") &&
        !sideNav.contains(e.target) &&
        !logoToggle.contains(e.target)
      ) {
        sideNav.classList.remove("active");
      }
    });

    // Smooth scroll for nav links
    document.querySelectorAll(".nav-links a").forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute("href"));
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }

        // Close nav after clicking a link
        if (sideNav) {
          sideNav.classList.remove("active");
        }
      });
    });
  });
</script>

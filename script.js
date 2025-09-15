document.addEventListener("DOMContentLoaded", function () {
  const intro = document.getElementById("intro");
  const enterBtn = document.getElementById("enterBtn");
  const mainSite = document.getElementById("main-site");

  // Intro → Main site transition
  enterBtn.addEventListener("click", function () {
    intro.classList.add("opacity-0", "pointer-events-none");
    setTimeout(() => {
      intro.style.display = "none";
      mainSite.classList.remove("hidden");
      mainSite.classList.add("fade-in");
    }, 700);
  });

  // Mobile nav toggle
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  menuToggle.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent closing instantly
    menuToggle.classList.toggle("open");
    navMenu.classList.toggle("show");
  });

  // Close menu when clicking nav links
  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("open");
      navMenu.classList.remove("show");
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (navMenu.classList.contains("show") && !navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
      menuToggle.classList.remove("open");
      navMenu.classList.remove("show");
    }
  });
});

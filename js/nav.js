function highlightActiveNav() {
  const navLinks = document.querySelectorAll("nav.nav a");
  const currentPath = window.location.pathname;

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });
}

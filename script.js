// ✅ Toggle du menu responsive
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// ✅ Scroll fluide uniquement pour les ancres internes (#id)
document.querySelectorAll("nav a").forEach(link => {
  const href = link.getAttribute("href");

  // Appliquer le scroll fluide uniquement si le lien est une ancre interne
  if (href.startsWith("#")) {
    link.addEventListener("click", event => {
      event.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
});

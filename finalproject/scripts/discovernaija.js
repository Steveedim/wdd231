document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const mainNav = document.getElementById("main-nav");
  menuToggle.addEventListener("click", () => {
    const isVisible = mainNav.style.display === "flex";
    mainNav.style.display = isVisible ? "none" : "flex";
  });
});

const yearSpan = document.getElementById("currentyear");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

const lastMod = document.getElementById("lastModified");
if (lastMod) {
  lastMod.textContent = `Last Modified: ${document.lastModified}`;
}

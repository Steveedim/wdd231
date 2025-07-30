// Set timestamp when form is loaded
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("timestamp").value = new Date().toISOString();

  // Optional animation on load
  const cards = document.querySelectorAll(".membership-cards .card");
  cards.forEach((card, index) => {
    card.style.opacity = 0;
    card.style.transform = "translateY(20px)";
    setTimeout(() => {
      card.style.transition = "all 0.6s ease";
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }, index * 200);
  });

  document.getElementById("year").textContent = new Date().getFullYear();
});

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

async function loadSpotlights() {
  const response = await fetch("data/members.json");
  const data = await response.json();
  const members = data.members.filter(m => m.membership === "Gold" || m.membership === "Silver");

  const spotlights = [];
  while (spotlights.length < 3 && members.length > 0) {
    const randomIndex = Math.floor(Math.random() * members.length);
    spotlights.push(members.splice(randomIndex, 1)[0]);
  }

  const container = document.getElementById("spotlight-container");
  spotlights.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("spotlight-card");
    card.innerHTML = `
      <h3>${member.name}</h3>
      <img src="${member.image}" alt="${member.name} logo" />
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">${member.website}</a>
      <p><strong>${member.membership}</strong> Member</p>
    `;
    container.appendChild(card);
  });
}
loadSpotlights();
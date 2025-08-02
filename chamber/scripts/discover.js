const messageEl = document.querySelector("#visit-message");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
  messageEl.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const days = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
  messageEl.textContent =
    days < 1
      ? "Back so soon! Awesome!"
      : `You last visited ${days} day${days > 1 ? 's' : ''} ago.`;
}
localStorage.setItem("lastVisit", now);

async function loadAttractions() {
  const response = await fetch("data/attractions.json");
  const data = await response.json();

  const container = document.querySelector("#attractions");
  data.forEach((item, index) => {
    const card = document.createElement("div");
    card.classList.add("card", `card${index + 1}`);
    card.innerHTML = `
      <h2>${item.name}</h2>
      <figure>
        <img src="${item.image}" alt="${item.name}" loading="lazy" width="300" height="200" />
      </figure>
      <address>${item.address}</address>
      <p>${item.description}</p>
      <button>Learn More</button>
    `;
    container.appendChild(card);
  });
}
loadAttractions();

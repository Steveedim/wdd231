const yearSpan = document.getElementById("currentyear");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

const lastMod = document.getElementById("lastModified");
if (lastMod) {
  lastMod.textContent = `Last Modified: ${document.lastModified}`;
}

const directory = document.getElementById('directory');
const gridBtn = document.getElementById('gridView');
const listBtn = document.getElementById('listView');

gridBtn.addEventListener('click', () => {
  directory.classList.add('gridView');
  directory.classList.remove('listView');
});

listBtn.addEventListener('click', () => {
  directory.classList.add('listView');
  directory.classList.remove('gridView');
});

async function getMembers() {
  const response = await fetch('data/members.json');
  const members = await response.json();
  displayMembers(members);
}

function displayMembers(members) {
  directory.innerHTML = '';
  members.forEach(member => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <h3>${member.name}</h3>
      <img src="images/${member.image}" alt="${member.name} logo">
      <p>${member.description}</p>
      <p><strong>Address:</strong> ${member.address}</p>
      <p><strong>Phone:</strong> ${member.phone}</p>
      <p><a href="${member.website}" target="_blank">Visit Website</a></p>
    `;
    directory.appendChild(card);
  });
}

getMembers();

const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

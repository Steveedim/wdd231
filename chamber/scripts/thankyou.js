
const urlParams = new URLSearchParams(window.location.search);
document.getElementById("fname").textContent = urlParams.get("fname");
document.getElementById("lname").textContent = urlParams.get("lname");
document.getElementById("email").textContent = urlParams.get("email");
document.getElementById("phone").textContent = urlParams.get("phone");
document.getElementById("orgname").textContent = urlParams.get("orgname");
document.getElementById("timestamp").textContent = urlParams.get("timestamp");
document.getElementById("year").textContent = new Date().getFullYear();
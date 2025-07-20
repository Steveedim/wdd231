const apiKey = "YOUR_API_KEY";
const lat = 6.5244; // Example: Lagos, Nigeria
const lon = 3.3792;
const weatherURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&appid=${apiKey}`;

async function fetchWeather() {
  const response = await fetch(weatherURL);
  const data = await response.json();

  document.getElementById("temp").textContent = `${data.current.temp}°C`;
  document.getElementById("description").textContent = data.current.weather[0].description;

  const forecastList = document.getElementById("forecast-list");
  forecastList.innerHTML = "";
  for (let i = 1; i <= 3; i++) {
    const day = data.daily[i];
    const li = document.createElement("li");
    li.textContent = `Day ${i}: ${day.temp.day}°C, ${day.weather[0].description}`;
    forecastList.appendChild(li);
  }
}
fetchWeather();

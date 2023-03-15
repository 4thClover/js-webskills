// Handle clicks on menu
const menubutton = document.querySelector("#open-nav-menu");
menubutton.addEventListener("click", () => {
  let menu = document.querySelector("header nav .wrapper");
  menu.classList.add("nav-open");
});

const crossmenu = document.querySelector("#close-nav-menu");
crossmenu.addEventListener("click", () => {
  let closure = document.querySelector("header nav .wrapper");
  closure.classList.remove("nav-open");
});

// CelToFahr Function
// Celcius To Fahrenheit calculation
function celciusToFahrenheit(temperature) {
  let fahr = temperature * 1.8 + 32;
  console.log(fahr);
}

// Text shown at loadtime
document.querySelector("#greeting").innerHTML = greetingText;

// Display dynamic weatherspecs on the page
let currentWeather = "sunny";
let geographical = "Paramaribo";
let temperature = 25;

const celciusText = document.querySelector("p#weather");
celciusText.textContent = `The weather is ${currentWeather} in ${geographical} and it is ${temperature.toFixed(
  1
)}°C outside`;

const fahrenheitText = document.querySelector("p#weather");
fahrenheitText.textContent = `The weather is ${currentWeather} in ${geographical} and it is ${celciusToFahrenheit(
  temperature.toFixed(1)
)}°F outside`;

// Handle Celcius/Fahrenheit Toggle Button
const weatherbutton = document.querySelector(".weather-group");

weatherbutton.addEventListener("click", function (e) {
  if (e.target.id == "celcius") {
    document.querySelector(".weather-group").innerHTML = celciusText;
  } else if (e.target.id == "fahr") {
    document.querySelector(".weather-group").innerHTML = fahrenheitText;
  }
});

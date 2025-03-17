const apiKey = "14b298a4f73ddcf988b71dd91e65f09a";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let input = document.querySelector("#input");
let notfound = document.querySelector(".container .notfound");
let body = document.querySelector(".container .containerBody");
let img = document.querySelector("#img");

const search = async (city) => {
  try {
    city = city.trim();
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();

    body.style.display = "flex";
    body.style.transition = "all 4s ease";
    notfound.style.display = "none";
    if (data.weather[0].main == "Clear") {
      img.src = "./images/clear.png";
    } else if (data.weather[0].main == "Clouds") {
      img.src = "./images/clouds.png";
    } else if (data.weather[0].main == "Drizzle") {
      img.src = "./images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      img.src = "./images/mist.png";
    } else if (data.weather[0].main == "Rain") {
      img.src = "./images/rain.png";
    } else if (data.weather[0].main == "Snow") {
      img.src = "./images/snow.png";
    }
    document.querySelector(".temp").innerHTML =
      Math.floor(data.main.temp) + "°C";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
     if (window.innerWidth <= 450) {
      input.value = "";
      input.blur();
    }
  } catch (error) {
    console.log(error);
    body.style.display = "none";
    notfound.style.display = "flex";
     if (window.innerWidth <= 450) {
//       input.value = "";
      input.blur();
    }
  }
};

search("sumerpur");
document.querySelector(".imgdiv").addEventListener("click", () => {
  search(input.value);
});
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.querySelector(".imgdiv").click();
  }
});

const API_KEY = "4679f7ba7c3267b2a5d2614b525cc994";

function onGeoOk(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const sky = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      const name = data.name;
      const weather = data.weather[0].main;
      sky.innerText = weather;
      city.innerText = name;
    });
}

function onGeoError() {
  alert("Can't get current position");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

const API_KEY = "6c30b16622f6c3b7a68ec7f283df96e2";

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("You live in", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:last-child");
      city.innerText = `${data.name}, ${data.weather[0].main}, ${data.main.temp.toFixed(1)}℃`;
});
}

function onGeoError(){
  alert("Can't find you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
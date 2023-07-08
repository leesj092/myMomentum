const API_KEY = "59091fe812c7a8fa3b500160aa99c1f7";

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp} degrees Celcius`;
        });
}

function onGeoError() {
    alert("Where are you...????");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
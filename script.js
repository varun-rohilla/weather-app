const apiKey = "7f9224e224dd6efc7503ab43c16fca2f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();
        console.log(data)

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = parseInt(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        document.querySelector(".weather-condition").innerHTML = data.weather[0].main;


        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png"
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png"
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png"
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png"
        }
        else if (data.weather[0].main == "Fog") {
            weatherIcon.src = "images/fog.png"
        }
        else if (data.weather[0].main == "Haze") {
            weatherIcon.src = "images/haze.png"
        }
        else if (data.weather[0].main == "Smoke") {
            weatherIcon.src = "images/smoke.png"
        }
        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "images/snow.png"
        }
        else if (data.weather[0].main == "Thunderstorm") {
            weatherIcon.src = "images/thunderstorm.png"
        }
        else if (data.weather[0].main == "Tornado") {
            weatherIcon.src = "images/tornado.png"
        }
        else {
            weatherIcon.src = "images/drizzle.png"
        }

        document.querySelector(".weather").style.display = "block"
        document.querySelector(".error").style.display = "none"
    }


}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})
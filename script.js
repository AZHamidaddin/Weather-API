
searchButton = document.getElementById("search")
searchField = document.getElementById("cityInput")

searchButton.addEventListener("click", getWeather)
searchField.addEventListener("keydown", handleKeyPress)

async function getWeather() {
    const city = document.getElementById('cityInput').value;
    if (!searchField.value) {
        alert("Please enter a city");
        return;
    }

    const apiKey = '79c0218dad404c7abc5210458241710'; 
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        document.getElementById('weatherInfo').innerHTML = `
            High: ${data.current.temp_c}°C <br>
            Low: ${data.current.temp_c - 10}°C <br>
            Wind Speed: ${data.current.wind_kph} kph
        `;
    } catch (error) {
        alert("Error fetching weather data. Please try again.");
        console.error(error);
    }
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        getWeather();
    }
}

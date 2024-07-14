document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'ce42f5c8c59e3c70f266d33fac1508c4'; // Reemplaza 'tu_api_key' con tu propia API key de OpenWeatherMap
    const lat = -34.61; // Latitud de Buenos Aires (ejemplo)
    const lon = -58.38; // Longitud de Buenos Aires (ejemplo)
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=es`;

    const weatherInfo = document.querySelector('.weather-info');

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const description = data.weather[0].description;
            const temperature = Math.round(data.main.temp);
            const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

            weatherInfo.innerHTML = `
                <img src="${icon}" alt="${description}">
                <p>${description}</p>
                <p>Temperatura: ${temperature}°C</p>
            `;
        })
        .catch(error => {
            console.log('Error al obtener el clima:', error);
            weatherInfo.textContent = 'Error al obtener el clima';
        });
});

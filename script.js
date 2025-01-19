const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key

async function getWeather() {
    const location = document.getElementById('location').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const city = document.querySelector('.city');
        const temp = document.querySelector('.temp');
        const description = document.querySelector('.description');
        const icon = document.querySelector('.icon');

        city.textContent = `${data.name}, ${data.sys.country}`;
        temp.textContent = `${data.main.temp.toFixed(1)}°C`;
        description.textContent = data.weather[0].description;

        const iconCode = data.weather[0].icon;
        icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${iconCode}@2x.png">`;

    } catch (error) {
        alert('Error fetching weather data.');
    }
}
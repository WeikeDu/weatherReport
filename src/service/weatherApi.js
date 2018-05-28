const api_key = 'b0a44d15c25906a8557def9eb05c66d3';
export function fetchWeatherApi (place) {
    return fetch(`http://api.openweathermap.org/data/2.5/weather?APPID=${api_key}&q=${place}`);
}

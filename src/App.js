import React from 'react';
import logo from './logo.svg';
import './css/App.css';
import './css/css/weather-icons.css'
import WeatherDetail from './components/weather-details'

// import { data } from './reducers/reducer-weather';
// const api_key = 'b0a44d15c25906a8557def9eb05c66d3';
// fetch(`http://api.openweathermap.org/data/2.5/weather?APPID=${api_key}&q=chengdu`)
//     .then(res => res.json()).then( json =>
// {
//     console.log(JSON.stringify(json));
//     data.key = json;
// });

const App = () => (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <WeatherDetail />
            </div>
);



export default App;

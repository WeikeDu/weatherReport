import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';


const api_key = 'b0a44d15c25906a8557def9eb05c66d3';
class App extends Component {
    buy = function(){
        this.getWeather(this.state.city)
    };

    foo = function(e) {
        this.state.city = e.target.value
    };

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.buy()
        }
    };

    constructor(props){
        super(props);
        this.state = {
            city: "",
            description: "",
            temp:"",
        }
    }

    getWeather(city){

        fetch(`http://api.openweathermap.org/data/2.5/weather?APPID=${api_key}&q=${city}`)
            .then(res => res.json())
            .then(json => {
                try{
                    this.setState({description: json.weather[0].description,
                        temp: Math.round(json.main.temp - 273.15)+'°C'})
                }
                catch (err){
                    this.setState({description:"wrong city name",
                        temp: ""})
                }
            })
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <h1>Weather Report for {this.state.city}</h1>
                <h2>{this.state.description}</h2>
                <h2>{this.state.temp}</h2>
                <p className="App-intro">
                    Please enter the city name
                </p>
                <input onKeyPress={this.handleKeyPress} onChange={(e) => this.foo(e)} type="text" id="xmlname"></input>
                <button onClick={() => this.buy()}>Enter</button>
            </div>
        );
    }
}

export default App;

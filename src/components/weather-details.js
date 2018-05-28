import React, {Component} from 'react';
import {connect} from 'react-redux';
import WeatherSearch from './weather-search'
import '../css/css/weather-icons.css'


class WeatherDetail extends Component {

    render() {
        if (this.props.weather) {
            if (this.props.weather.cod !== '404') {
                return (
                    <div>
                        <h1>Weather Report for {this.props.weather.name}</h1>
                        <i className={`wi wi-owm-${this.props.weather.weather[0].id}`}></i>
                        <h2>{this.props.weather.weather[0].description}</h2>
                        <h2>{Math.round(this.props.weather.main.temp - 273.15) + '°C'}</h2>
                        <WeatherSearch/>
                    </div>
                )
            }
            else {
                return (
                    <div>
                        <h1>{this.props.weather.message}</h1>
                        <WeatherSearch/>
                    </div>
                )
            }
        }

        return <WeatherSearch/>

    }
}

function mapStateToProps(state) {
    return {
        weather: state.weather
    };
}

export default connect(mapStateToProps)(WeatherDetail);
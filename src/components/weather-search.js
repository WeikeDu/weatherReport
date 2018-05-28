import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getWeather} from "../actions/people-actions";
import {inputPlace} from "../actions/people-input";


class WeatherSearch extends Component {

    handleKeyPress = (e) => {
        console.log(e);
        if (e.key === 'Enter' && !!this.props.placeinput) {
            this.props.getWeather(this.props.placeinput)
        }
    };

    render() {

        return (
            <div>
                <p className="App-intro">
                    Please enter the city name
                </p>
                <input onKeyPress={this.handleKeyPress} onChange={(e) => this.props.inputPlace(e.target.value)} type="text" id="xmlname"/>
                <button onClick={() => this.props.getWeather(this.props.placeinput)}>Enter</button>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        placeinput: state.placeinput,

    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, {inputPlace: inputPlace}, {getWeather: getWeather}), dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(WeatherSearch);
import React from 'react';
import { shallow } from 'enzyme';
import WeatherDetail from '../components/weather-details'
import configureStore from 'redux-mock-store'
import {inputPlace} from '../actions/people-input'
import inputcityReducer from '../reducers/reducer-input-city'

const initialState = {"coord":{"lon":104.06,"lat":30.68},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"base":"stations","main":{"temp":297.15,"pressure":1007,"humidity":53,"temp_min":297.15,"temp_max":297.15},"visibility":10000,"wind":{"speed":2,"deg":270},"clouds":{"all":40},"dt":1527073200,"sys":{"type":1,"id":7461,"message":0.0071,"country":"CN","sunrise":1527026681,"sunset":1527076601},"id":1815286,"name":"Chengdu","cod":200}
const mockStore = configureStore();
let store,container;

beforeEach(()=>{
    store = mockStore(initialState);
    container = shallow(<WeatherDetail store={store} /> )
});

it('+++ check Prop matches with initialState', () => {
    expect(container.prop('weather')).toEqual(initialState.weather)
});

it('render weather search component',() =>{
    expect(container.length).toEqual(1)
});

it('+++ actionCreator addInputs', () => {
    const a = inputPlace("chengdu");
    expect(a).toEqual({type:"INPUT_WEATHER",payload: "chengdu"})
});

it('+++ reducer for ADD_INPUT', () => {
    let state=null;
    state = inputcityReducer(state,{type:"INPUT_WEATHER",payload:"chengdu"})
    expect(state).toEqual("chengdu")
});

// it('should render a label', () => {
//     const wrapper = shallow(
//         <h1>Weather Report for 1111</h1>
//     );
//     expect(wrapper).toMatchSnapshot();
// });

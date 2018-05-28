import {combineReducers} from 'redux';
import WeatherReducer from './reducer-weather';
import inputcityReducer from './reducer-input-city'

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    weather: WeatherReducer,
    placeinput: inputcityReducer,
});

export default allReducers

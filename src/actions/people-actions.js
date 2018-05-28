import {fetchWeatherApi} from './../service/weatherApi'
export const getWeather = (place) => {
    return function (dispatch) {
        fetchWeatherApi(place).then(
            res => {
                dispatch({
                    type: 'GET_WEATHER',
                    payload: res.json(),
                })
            }
        )

    }
}

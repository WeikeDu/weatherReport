export default function (state = null, action) {
    switch (action.type) {
        case 'GET_WEATHER_FULFILLED': {
            return action.payload;
        }
        case 'GET_WEATHER_REJECTED': {
            return action.payload;
        }

    }
    return state;
}

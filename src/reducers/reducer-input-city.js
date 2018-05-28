export default function (state = null, action) {
    switch (action.type) {
        case 'INPUT_WEATHER':
            return action.payload;
    }
    return state;
}
import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch(action.type) {
        case FETCH_WEATHER:
            // return a new state instead of adding to state via state.push
            // below is same as return state.concat([ action.payload.data ]);
            return [ action.payload.data, ...state ]; // [ city3, city2, city1] NOT  [ city2, [ city1 ] ]
    }
    return state;
}
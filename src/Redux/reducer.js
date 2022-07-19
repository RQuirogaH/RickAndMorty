import { CHANGE_STATE, GET_ALL_LOCATIONS } from "./actions";

const initialState = {
    locations: ['esta es una location'],
    characters: [],
    episodes: ['este es un location']
};

//Aplicamos toda la logica para cambiar el estado

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_LOCATIONS:
            return {
                ...state,
                users: action.payload
            }
        case CHANGE_STATE:
            return {
                ...state,
                locations: [action.payload]
            }
        default:
            return state;
    }
}
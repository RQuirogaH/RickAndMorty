export const GET_ALL_LOCATIONS = 'GET_ALL_LOCATIONS';
export const CHANGE_STATE  = 'CHANGE_STATE';

// Actions solo es la orden de que hacer y la información adicional

export function getAllPosts() {
    return function(dispatch) {
        return fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(response => response.json())
        .then(data => dispatch({type: GET_ALL_POSTS, payload: data}))
    }
}

export function changeState(payload) {
    return {
        type: CHANGE_STATE,
        payload: payload
    }
}

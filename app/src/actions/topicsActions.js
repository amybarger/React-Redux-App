import axios from 'axios';

export const FETCH_TOPIC_FAILURE = 'FETCH_TOPIC_FAILURE';

export const fetchTopic = () => {
    
    return dispatch => {
        dispatch({ type: 'FETCH_TOPIC'});
        axios
            .get('	https://api.adviceslip.com/advice')
            .then(res => {
                dispatch({ type: 'FETCH_TOPIC_SUCCESS',
                payload: res.data.slip.advice}, 
                console.log("API success", res));
            })
            .catch(err => {
                dispatch({
                    type: 'FETCH_TOPIC_FAILURE',
                    payload: `Error ${err.response} : ${err.response}`
                })
            })
    }
}

export const updateTitle = newTitle => {
    return {};
}
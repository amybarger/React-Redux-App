import axios from 'axios';

export const FETCH_TOPIC_FAILURE = 'FETCH_TOPIC_FAILURE';

export const fetchTopic = () => {
    
    return dispatch => {
        dispatch({ type: 'FETCH_TOPIC'});
        axios
            .get('https://www.healthcare.gov/api/:content-type.json')
            .then(res => {
                dispatch({ type: 'FETCH_TOPIC_SUCCESS',
                payload: res.data.topic});
            })
            .catch(err => {
                dispatch({
                    type: 'FETCH_TOPIC_FAILURE',
                    payload: `Error ${err.response.status} : ${err.response.data}`
                })
            })
    }
}

export const updateTitle = newTitle => {
    return {};
}
const initialState = {
    topic: '',
    isFetching: false,
    error: ''
}

export const topicsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_TOPIC' :
            return {
                ...state,
                isFetching: true
            }
        case 'FETCH_TOPIC_SUCCESS' :
            return {
                ...state,
                isFetching: false,
                topic: action.payload,
                error: ''
            }
        case 'FETCH_TOPIC_FAILURE' :
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { fetchTopic } from '../actions/topicsActions';

const Topics = props => {
    useEffect(() => {
        props.fetchTopic();
    }, []);
    console.log("topics props", props)
    return (
        <div>
             <h1>🤷 Get Mediocre Advice!</h1>
             {props.isFetching && (<Loader type="Puff" color="#00BFFF" height={100} width={100} />)}
             {props.topic && <h3>{props.topic}</h3>}
             {props.error && <p className="error">{props.error}</p>}
             <button onClick={props.fetchTopic}>Fetch a new advice</button>
        </div>
    )
}

const mapStateToProps = state => {
    console.log("state for mapstatetoprops", state);
        return {
            topic: state.topicsReducer.topic,
            isFetching: state.topicsReducer.isFetching,
            error: state.topicsReducer.error
        }
}

export default connect(mapStateToProps, { fetchTopic })(Topics);
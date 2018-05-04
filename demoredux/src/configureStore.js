import {applyMiddleware, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'

// import {composeWithDevTools} from 'redux-devtools-extension'

const middlewares = [thunkMiddleware, logger];

export default function configureStore(reducer) {
    return createStore(
        reducer,
        applyMiddleware(...middlewares),
        // applyMiddleware(thunkMiddleware),
        // composeWithDevTools(thunkMiddleware)
    );
}
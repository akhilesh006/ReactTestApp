import {combineReducers} from 'redux';
import thunk from 'redux-thunk'
import BookReducer from './reducer_books'

const rootReducer=combineReducers({
    books:BookReducer
});

export default rootReducer;



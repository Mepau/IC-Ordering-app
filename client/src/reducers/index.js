import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import orderpackReducer from './orderpackReducer';

export default combineReducers({
    error: errorReducer,
    auth: authReducer,
    orderpack: orderpackReducer
});
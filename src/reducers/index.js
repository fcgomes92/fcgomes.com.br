/**
 * Created by gomes on 16/10/16.
 */
import {routerReducer as routing} from 'react-router-redux';
import {combineReducers} from 'redux';
import {cards} from './Cards';

const rootReducer = combineReducers({
    cards,
    routing
});

export default rootReducer;
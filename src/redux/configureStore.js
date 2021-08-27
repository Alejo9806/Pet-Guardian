import {createStore,applyMiddleware,compose, combineReducers} from 'redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { auth } from './reducers/auth';
import {register} from './reducers/register';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            register,
            auth
        }),
        composeEnhancers(applyMiddleware(thunk,logger))
    );

    return store;
}
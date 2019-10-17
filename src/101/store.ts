import { createStore as reduxCreateStore } from 'redux';
import { rootReducer } from './reducer';

export function createStore(initialState) {
    return reduxCreateStore(rootReducer, initialState);
}
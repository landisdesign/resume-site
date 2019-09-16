import {combineReducers, createStore} from 'redux';

import * as reducers from './reducers';

const appReducer = combineReducers(reducers);

const ApplicationStore = createStore(appReducer);

export default ApplicationStore;
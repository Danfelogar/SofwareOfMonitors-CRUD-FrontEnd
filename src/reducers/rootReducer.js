import { combineReducers } from 'redux';

import { monitoringsReducer } from './monitoringsReducer';
import { monitorsReducer } from './monitorsReducer';
import { uiReducer } from './uiReducer';


export const rootReducer = combineReducers({
    ui: uiReducer,
    monitorings: monitoringsReducer,
    monitors: monitorsReducer
});

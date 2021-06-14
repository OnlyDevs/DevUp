import { combineReducers } from 'redux';

import onlyDevsReducer from './onlyDevsReducer';

const reducers = combineReducers({
  onlyDevs: onlyDevsReducer,
});

export default reducers;

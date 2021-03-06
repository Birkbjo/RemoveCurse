import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
// eslint-disable-next-line import/no-cycle
import counterReducer from './features/counter/counterSlice';
import configReducer from './features/config/configSlice';
import addonsReducer from './features/AddonsView/reducers';

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    counter: counterReducer,
    config: configReducer,
    addons: addonsReducer,
  });
}

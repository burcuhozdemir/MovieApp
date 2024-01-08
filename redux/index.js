import {configureStore} from '@reduxjs/toolkit';
import combineReducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import logger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, logger];

const configurationAppStore = () => {
  const store = configureStore({
    reducer: combineReducers,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(middleware),
    devTools: process.env.NODE_ENV === 'development',
  });
  sagaMiddleware.run(rootSaga);
  return store;
};
export default configurationAppStore;

import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootsaga from './sagas/rootSaga';
import rootReducer from './reducers/rootReducer';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootsaga);

  return store;
};

export default configureStore;

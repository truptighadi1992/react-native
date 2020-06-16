import {createStore, applyMiddleware, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {all} from 'redux-saga/effects';

import studyReducer from '../redux/reducers/studyReducer';
import subjectReducer from '../redux/reducers/subjectReducer';

import studySaga from '../redux/sagas/studySaga';
import subjectSaga from '../redux/sagas/subjectSaga';

//list all reducers here
const rootReducer = combineReducers({
  study: studyReducer,
  subject: subjectReducer,
});

//list all sagas here
function* rootSaga() {
  yield all([studySaga(), subjectSaga()]);
}

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;

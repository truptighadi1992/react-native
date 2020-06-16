import {all, takeEvery, put, call} from 'redux-saga/effects';
import {SUBJECT} from '../constants';
import {
  fetchSubjeSuccess,
  fetchSubjectDetailsError,
} from '../actions/subjectActions';
import {fetchSubjectDetails} from '../api/Api';

function* handleSubjectFetch(action) {
  const {subjectId} = action;

  try {
    const subjectFetched = yield call(fetchSubjectDetails, subjectId);
    yield put(fetchSubjeSuccess(subjectFetched));
  } catch (err) {
    yield put(fetchSubjectDetailsError(err.toString()));
  }
}

function* subjectSaga() {
  yield takeEvery(SUBJECT.FETCH, handleSubjectFetch);
}

export default subjectSaga;

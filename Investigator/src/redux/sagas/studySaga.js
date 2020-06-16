import {all, takeEvery, call, put} from 'redux-saga/effects';
import {STUDY} from '../constants';
import {fetchStudiesSuccess, fetchStudiesError} from '../actions/studyActions';
import {fetchStudies, fetchSubjectDetails} from '../api/Api';

function* handleStudyFetch(action) {
  const {userId} = action;

  try {
    const studiesFetched = yield call(fetchStudies, userId);
    yield put(fetchStudiesSuccess(studiesFetched));
  } catch (err) {
    yield put(fetchStudiesError(err.toString()));
  }
}

function* studySaga() {
  yield takeEvery(STUDY.FETCH, handleStudyFetch);
}

export default studySaga;

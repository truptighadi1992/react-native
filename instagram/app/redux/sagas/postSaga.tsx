import {all, put, takeEvery, call} from 'redux-saga/effects';

import {POST} from '../constants';
import {fetchPosts} from '../api/postApi';
import {fetchPostSuccess, fetchPostError} from '../actions/postAction';

function* handleFetchPost(action) {
  const {payload} = action;
  try {
    const posts = yield call(fetchPosts, payload.userId);

    yield put(fetchPostSuccess(posts));
  } catch (err) {
    yield put(fetchPostError(err.toString()));
  }
}

function* postWatcherSaga() {
  yield takeEvery(POST.FETCH, handleFetchPost);
}

export default postWatcherSaga;

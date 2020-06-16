import {POST} from '../constants';

const fetchPost = userId => {
  return {
    type: POST.FETCH,
    payload: {
      userId: userId,
    },
  };
};
const fetchPostSuccess = posts => {
  return {
    type: POST.FETCH_SUCCESS,
    payload: {
      posts: posts,
    },
  };
};

const fetchPostError = error => {
  return {
    type: POST.FETCH_ERROR,
    payload: {
      error: error,
    },
  };
};

export {fetchPost, fetchPostSuccess, fetchPostError};

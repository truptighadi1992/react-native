import {STUDY} from '../constants';

const fetchStudies = userId => {
  return {
    type: STUDY.FETCH,
    userId,
  };
};
const fetchStudiesSuccess = studies => {
  return {
    type: STUDY.FETCH_SUCCESS,
    studies,
  };
};
const fetchStudiesError = error => {
  return {
    type: STUDY.FETCH_ERROR,
    error,
  };
};

export {fetchStudies, fetchStudiesSuccess, fetchStudiesError};

import {SUBJECT} from '../constants';

const fetchSubject = subjectId => {
  return {
    type: SUBJECT.FETCH,
    subjectId,
  };
};
const fetchSubjeSuccess = subject => {
  return {
    type: SUBJECT.FETCH_SUCCESS,
    subject,
  };
};
const fetchSubjectDetailsError = error => {
  return {
    type: SUBJECT.FETCH_ERROR,
    error,
  };
};

export {fetchSubject, fetchSubjeSuccess, fetchSubjectDetailsError};

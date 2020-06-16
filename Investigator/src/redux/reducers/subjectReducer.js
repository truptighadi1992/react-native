import {SUBJECT} from '../constants';

const initialState = {
  isLoading: false,
  subject: {},
  error: null,
};

const subjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBJECT.FETCH:
      return {...state, isLoading: true};
    case SUBJECT.FETCH_SUCCESS:
      return {...state, isLoading: false, subject: action.subject, error: null};
    case SUBJECT.FETCH_ERROR:
      return {...state, isLoading: false, error: action.error, subject: {}};
    default:
      return state;
  }
};

export default subjectReducer;

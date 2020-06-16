import {STUDY} from '../constants';

const initialState = {
  isLoading: false,
  studies: [],
  error: null,
};

const studyReducer = (state = initialState, action) => {
  switch (action.type) {
    case STUDY.FETCH:
      return {...state, isLoading: true};
    case STUDY.FETCH_SUCCESS:
      return {...state, isLoading: false, studies: action.studies, error: null};
    case STUDY.FETCH_ERROR:
      return {...state, isLoading: false, error: action.error, studies: []};
    default:
      return state;
  }
};

export default studyReducer;

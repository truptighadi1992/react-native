import Post from '../../models/Post';
import {POST} from '../constants';

interface State {
  posts: Post[];
  isLoading: boolean;
  error: object;
}
const initialState: State = {
  posts: [],
  isLoading: false,
  error: null,
};

function postReducer(state = initialState, action) {
  switch (action.type) {
    case POST.FETCH:
      return {...state, isLoading: true};
    case POST.FETCH_SUCCESS:
      return {...state, isLoading: false, posts: action.payload.posts};
    case POST.FETCH_ERROR:
      return {...state, isLoading: false, error: action.payload.error};
    default:
      return state;
  }
}

export default postReducer;

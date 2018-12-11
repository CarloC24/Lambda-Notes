import { SINGLE_NOTE, GET_TODOS, GET_TAGS } from '../actions';

const initialState = {
  singleNote: {},
  todos: [],
  tags: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SINGLE_NOTE:
      return {
        ...state,
        singleNote: action.payload
      };
    case GET_TODOS:
      return {
        ...state,
        todos: action.payload
      };
    case GET_TAGS:
      return {
        ...state,
        tags: action.payload
      };
    default:
      return state;
  }
};

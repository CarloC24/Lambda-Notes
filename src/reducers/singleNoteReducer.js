import { SINGLE_NOTE } from '../actions';

const initialState = {
  singleNote: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SINGLE_NOTE:
      return {
        ...state,
        singleNote: action.payload
      };
    default:
      return state;
  }
};

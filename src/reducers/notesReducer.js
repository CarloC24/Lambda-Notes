import { SHOW_NOTES } from '../actions';
const initialState = {
  notes: [],
  name: 'Carlo'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_NOTES:
      return {
        ...state,
        notes: action.payload
      };
    default:
      return state;
  }
};

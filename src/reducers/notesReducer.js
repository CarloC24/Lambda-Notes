import { SHOW_NOTES, FILTERED_NOTES, CLEAR_FILTERED_NOTES } from '../actions';
const initialState = {
  notes: [],
  name: 'Carlo',
  filtered: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_NOTES:
      return {
        ...state,
        notes: action.payload
      };
    case FILTERED_NOTES:
      return {
        ...state,
        filtered: action.payload
      };
    case CLEAR_FILTERED_NOTES:
      return {
        ...state,
        filtered: []
      };
    default:
      return state;
  }
};

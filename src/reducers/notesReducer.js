import { SHOW_NOTES, ADD_NOTES, UPDATE_NOTES, DELETED_NOTES } from '../actions';
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
    case ADD_NOTES:
      return {
        ...state,
        notes: action.payload
      };
    case UPDATE_NOTES:
      return {
        ...state,
        notes: state.notes.map(
          item => (item._id === action.payload._id ? action.payload : item)
        )
      };
    case DELETED_NOTES:
      return {
        ...state,
        notes: action.payload
      };

    default:
      return state;
  }
};

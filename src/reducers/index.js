import { combineReducers } from 'redux';
import notesReducer from './notesReducer';
import singleNoteReducer from './singleNoteReducer';
import singleUser from './singleUser';

export default combineReducers({
  notesReducer,
  singleNoteReducer,
  singleUser
});

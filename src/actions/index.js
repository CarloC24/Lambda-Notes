import axios from 'axios';

export const SHOW_NOTES = 'SHOW_NOTES';
export const ADD_NOTES = 'ADD_NOTES';
export const SINGLE_NOTE = 'SINGLE_NOTE';
export const UPDATE_NOTES = 'UPDATE_NOTES';
export const DELETED_NOTES = 'DELETED_NOTES';

export const show_notes = () => dispatch => {
  axios
    .get('https://fe-notes.herokuapp.com/note/get/all')
    .then(res => dispatch({ type: SHOW_NOTES, payload: res.data }))
    .catch(err => alert(err));
};

export const add_notes = item => dispatch => {
  axios
    .post('https://fe-notes.herokuapp.com/note/create', item)
    .then(res => alert('successful', res))
    .catch(err => alert(err));

  axios
    .get('https://fe-notes.herokuapp.com/note/get/all')
    .then(res => dispatch({ type: ADD_NOTES, payload: res.data }))
    .catch(err => alert(err));
};

export const singleNote = note => {
  return {
    type: SINGLE_NOTE,
    payload: note
  };
};

export const updateSingleNote = (id, note) => dispatch => {
  axios
    .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, note)
    .then(res => dispatch({ type: UPDATE_NOTES, payload: res.data }))
    .catch(err => alert(err));
};

export const deleteSingleNote = id => dispatch => {
  axios
    .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
    .then(res => alert(res))
    .catch(err => alert(err));

  axios
    .get('https://fe-notes.herokuapp.com/note/get/all')
    .then(res => dispatch({ type: ADD_NOTES, payload: res.data }))
    .catch(err => alert(err));
};

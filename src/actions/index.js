import axios from 'axios';

export const SHOW_NOTES = 'SHOW_NOTES';
export const ADD_NOTES = 'ADD_NOTES';

export const show_notes = () => dispatch => {
  axios
    .get('https://fe-notes.herokuapp.com/note/get/all')
    .then(res => dispatch({ type: SHOW_NOTES, payload: res.data }))
    .catch(err => alert(err));
};

export const add_notes = item => dispatch => {
  console.log('added notes');
  axios
    .post('https://fe-notes.herokuapp.com/note/create', item)
    .then(res => alert('successful', res))
    .catch(err => alert(err));

  axios
    .get('https://fe-notes.herokuapp.com/note/get/all')
    .then(res => dispatch({ type: ADD_NOTES, payload: res.data }))
    .catch(err => alert(err));
};

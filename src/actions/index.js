import axios from 'axios';

export const SHOW_NOTES = 'SHOW_NOTES';
export const ADD_NOTES = 'ADD_NOTES';
export const SINGLE_NOTE = 'SINGLE_NOTE';
export const FILTERED_NOTES = 'FILTERED_NOTES';
export const CLEAR_FILTERED_NOTES = 'CLEAR_FILTERED_NOTES';

export const show_notes = () => dispatch => {
  axios
    .get('https://fe-notes.herokuapp.com/note/get/all')
    .then(res => dispatch({ type: SHOW_NOTES, payload: res.data }))
    .catch(err => alert(err));
};

export const add_notes = item => dispatch => {
  axios
    .post('https://fe-notes.herokuapp.com/note/create', item)
    .then(() => {
      axios
        .get('https://fe-notes.herokuapp.com/note/get/all')
        .then(res => dispatch({ type: SHOW_NOTES, payload: res.data }))
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
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
    .then(() => {
      axios
        .get('https://fe-notes.herokuapp.com/note/get/all')
        .then(res => dispatch({ type: SHOW_NOTES, payload: res.data }))
        .catch(err => alert(err));
    })
    .catch(err => alert(err));
};

export const deleteSingleNote = id => dispatch => {
  axios
    .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
    .then(() => {
      axios
        .get('https://fe-notes.herokuapp.com/note/get/all')
        .then(res => dispatch({ type: SHOW_NOTES, payload: res.data }))
        .catch(err => alert(err));
    })
    .catch(err => alert(err));
};

export const filtered_notes = notes => {
  return {
    type: FILTERED_NOTES,
    payload: notes
  };
};

export const clear_filtered_notes = () => {
  return {
    type: CLEAR_FILTERED_NOTES
  };
};

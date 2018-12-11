import axios from 'axios';

export const SHOW_NOTES = 'SHOW_NOTES';
export const ADD_NOTES = 'ADD_NOTES';
export const SINGLE_NOTE = 'SINGLE_NOTE';
export const FILTERED_NOTES = 'FILTERED_NOTES';
export const CLEAR_FILTERED_NOTES = 'CLEAR_FILTERED_NOTES';
export const GET_TODOS = 'GET_TODOS';
export const GET_TAGS = 'GET_TAGS';

export const show_notes = () => dispatch => {
  axios
    .get('http://localhost:9000/notes')
    .then(res => dispatch({ type: SHOW_NOTES, payload: res.data }))
    .catch(err => alert(err));
};

export const add_notes = item => dispatch => {
  axios
    .post('http://localhost:9000/notes', item)
    .then(() => {
      axios
        .get('http://localhost:9000/notes')
        .then(res => dispatch({ type: SHOW_NOTES, payload: res.data }))
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
};

export const singleNote = id => dispatch => {
  axios
    .get(`http://localhost:9000/notes/${id}`)
    .then(res => dispatch({ type: SINGLE_NOTE, payload: res.data }))
    .catch(err => alert(err));
};

export const updateSingleNote = (id, note) => dispatch => {
  console.log(id, note);
  axios
    .put(`http://localhost:9000/notes/${id}`, note)
    .then(() => {
      axios
        .get('http://localhost:9000/notes')
        .then(res => dispatch({ type: SHOW_NOTES, payload: res.data }))
        .catch(err => alert(err));
    })
    .catch(err => alert(err));
};

export const deleteSingleNote = id => dispatch => {
  axios
    .delete(`http://localhost:9000/notes/${id}`)
    .then(() => {
      axios
        .get('http://localhost:9000/notes')
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

// TODOS
export const get_todos = id => dispatch => {
  axios
    .get(`http://localhost:9000/todos/notes/${id}`)
    .then(resp => dispatch({ type: GET_TODOS, payload: resp.data }))
    .catch(err => alert(err));
};

export const add_todos = (singleNoteId, todos) => dispatch => {
  axios
    .post('http://localhost:9000/todos', todos)
    .then(() => {
      axios
        .get(`http://localhost:9000/todos/notes/${singleNoteId}`)
        .then(resp => dispatch({ type: GET_TODOS, payload: resp.data }))
        .catch(err => alert(err));
    })
    .catch(err => {
      alert(err);
    });
};

export const delete_todos = (singleNoteId, id) => dispatch => {
  axios
    .delete(`http://localhost:9000/todos/${id}`)
    .then(() => {
      axios
        .get(`http://localhost:9000/todos/notes/${singleNoteId}`)
        .then(resp => dispatch({ type: GET_TODOS, payload: resp.data }))
        .catch(err => alert(err));
    })
    .catch(err => {
      alert(err);
    });
};
//TAGS
export const get_tags = id => dispatch => {
  axios
    .get(`http://localhost:9000/tags/${id}`)
    .then(resp => dispatch({ type: GET_TAGS, payload: resp.data }))
    .catch(err => alert(err));
};

export const add_tags = (tags, id) => dispatch => {
  axios
    .post(`http://localhost:9000/tags`, tags)
    .then(() => {
      axios
        .get(`http://localhost:9000/tags/${id}`)
        .then(resp => dispatch({ type: GET_TAGS, payload: resp.data }))
        .catch(err => alert(err));
    })
    .catch(err => alert(err));
};

export const delete_tags = (id, singleNoteId) => dispatch => {
  console.log('here');
  axios
    .delete(`http://localhost:9000/tags/${id}`)
    .then(() => {
      axios
        .get(`http://localhost:9000/tags/${singleNoteId}`)
        .then(resp => dispatch({ type: GET_TAGS, payload: resp.data }))
        .catch(err => alert(err));
    })
    .catch(err => alert(err));
};

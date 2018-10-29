import axios from 'axios';

export const SHOW_NOTES = 'SHOW_NOTES';

export const show_notes = () => dispatch => {
  console.log('reached shownotes');
  axios
    .get('https://killer-notes.herokuapp.com/')
    .then(res => dispatch({ type: SHOW_NOTES, payload: res.data }))
    .catch(err => alert(err));
};

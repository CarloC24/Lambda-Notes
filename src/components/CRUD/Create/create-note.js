import React, { useState } from 'react';
import '../../../CSS/index.scss';
import { add_notes } from '../../../actions';
import { connect } from 'react-redux';

const newNote = props => {
  const [newNotes, setNewNote] = useState({
    title: '',
    textBody: '',
    tags: []
  });

  const handleChange = e => {
    setNewNote({
      ...newNotes,
      [e.target.name]: e.target.value
    });
  };

  const update = e => {
    e.preventDefault();
    if (newNotes.title.length > 0 && newNotes.textBody.length > 0) {
      props.add_notes(newNotes);
      props.history.push('/');
    } else {
      alert('Cant have a empty field');
    }
  };
  return (
    <div>
      <form className="new" onSubmit={e => update(e)}>
        <h1 className="new-heading">Create a new note</h1>
        <div className="new-container">
          <label>Title:</label>
          <input
            type="text"
            className="new-title"
            onChange={e => handleChange(e)}
            name="title"
          />
        </div>
        <div className="new-container">
          <label className="label-body">Body:</label>
          <input
            type="text"
            className="new-body"
            onChange={e => handleChange(e)}
            name="textBody"
          />
        </div>
        <button type="submit" onSubmit={e => update(e)}>
          Add new note{' '}
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {};
const mapDispatchToProps = dispatch => {
  return {
    add_notes: note => dispatch(add_notes(note))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(newNote);

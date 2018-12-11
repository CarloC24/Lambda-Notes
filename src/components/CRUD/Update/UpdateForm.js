import React, { useState } from 'react';
import '../../../CSS/index.scss';
import { connect } from 'react-redux';
import { updateSingleNote, get_todos } from '../../../actions';

const editNote = props => {
  const [editedNote, setEditedNote] = useState({
    title: props.singleNote.title,
    tags: props.singleNote.tags,
    textBody: props.singleNote.textBody,
    id: props.singleNote.id
  });

  const handleChange = e => {
    setEditedNote({
      ...editedNote,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    props.updateSingleNote(editedNote.id, editedNote);
    props.history.push('/');
  };
  return (
    <div className="edit-form">
      <h1 className="edit-form-heading">Edit Note:</h1>
      <form className="edit-form-form" onSubmit={e => handleSubmit(e)}>
        <input
          type="text"
          name="title"
          onChange={e => handleChange(e)}
          value={editedNote.title}
          placeholder="add a new note"
        />
        <input
          type="text"
          name="textBody"
          onChange={e => handleChange(e)}
          value={editedNote.textBody}
        />

        <button type="submit" onSubmit={e => handleSubmit(e)}>
          Update
        </button>
      </form>
    </div>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    updateSingleNote: (id, note) => dispatch(updateSingleNote(id, note)),
    get_todos: todos => dispatch(get_todos(todos))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(editNote);

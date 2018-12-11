import React from 'react';
import Todos from '../Read/todos';

export default props => {
  console.log(props.singleNote);
  return (
    <div>
      <div className="single-note">
        <div className="buttons">
          <button className="edit" onClick={() => props.edit()}>
            Edit
          </button>
          <button className="delete" onClick={() => props.toggledelete()}>
            Delete
          </button>
        </div>
        <h1 className="single-note-heading">{props.singleNote.title}</h1>
        <h1 className="single-note-body">{props.singleNote.textBody}</h1>
        <Todos id={props.singleNote.id} />
      </div>
    </div>
  );
};

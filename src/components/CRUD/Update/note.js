import React from 'react';

export default props => {
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
      </div>
    </div>
  );
};
import React from 'react';
import '../../../CSS/index.scss';

const newNote = () => {
  return (
    <div>
      <form className="new">
        <h1 className="new-heading">Create a new note</h1>
        <div className="new-container">
          <label>Title:</label>
          <input type="text" className="new-title" />
        </div>
        <div className="new-container">
          <label className="label-body">Body:</label>
          <input type="text" className="new-body" />
        </div>
      </form>
    </div>
  );
};

export default newNote;

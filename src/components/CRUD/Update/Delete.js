import React from 'react';
import { connect } from 'react-redux';
import { deleteSingleNote } from '../../../actions';
import '../../../CSS/index.scss';

const Delete = props => {
  const deleteme = () => {
    props.deleteSingleNote(props.singleNote._id);
    props.history.push('/');
  };

  const donotdeleteme = () => {
    props.toggledelete();
  };
  return (
    <div className="delete-modal-container">
      <div className="delete-modal">
        <h1 className="delete-heading">
          Are you sure you want to delete this?
        </h1>
        <button onClick={() => deleteme()} className="yes">
          Yes
        </button>
        <button onClick={() => donotdeleteme()} className="no">
          No
        </button>
      </div>
    </div>
  );
};

export default connect(
  null,
  { deleteSingleNote }
)(Delete);

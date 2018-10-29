import React from 'react';
import { connect } from 'react-redux';
import { deleteSingleNote } from '../../../actions';

const Delete = props => {
  const deleteme = () => {
    props.deleteSingleNote(props.singleNote._id);
    props.history.push('/');
  };

  const donotdeleteme = () => {
    props.toggledelete();
  };
  return (
    <div className="delete-modal">
      <h1>Are you sure you want to delete??</h1>
      <button onClick={() => deleteme()}>Yes</button>
      <button onClick={() => donotdeleteme()}>No</button>
    </div>
  );
};

export default connect(
  null,
  { deleteSingleNote }
)(Delete);

import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import '../../../CSS/index.scss';
import Note from './note';
import EditNote from './UpdateForm';
import Delete from './Delete';

const singleNote = props => {
  const [editBool, setEditBool] = useState(false);
  const [deleteBool, setDelBool] = useState(false);

  useEffect(() => {});

  const edit = () => {
    setEditBool(!editBool);
  };

  const toggledelete = () => {
    setDelBool(!deleteBool);
  };

  return (
    <div className="modal">
      {props.singleNote.tags ? <h1>True</h1> : <h1>False</h1>}
      {deleteBool ? (
        <Delete
          singleNote={props.singleNote}
          history={props.history}
          toggledelete={toggledelete}
        />
      ) : null}
      {editBool ? (
        <EditNote singleNote={props.singleNote} history={props.history} />
      ) : (
        <Fragment>
          <Note
            singleNote={props.singleNote}
            edit={edit}
            toggledelete={toggledelete}
          />
        </Fragment>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    singleNote: state.singleNoteReducer.singleNote
  };
};

export default connect(
  mapStateToProps,
  null
)(singleNote);

import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import '../../../CSS/index.scss';
import Note from './note';
import EditNote from './UpdateForm';
import Delete from './Delete';
import { get_todos, get_tags } from '../../../actions';

const singleNote = props => {
  const [editBool, setEditBool] = useState(false);
  const [deleteBool, setDelBool] = useState(false);
  useEffect(
    () => {
      props.get_tags(props.singleNote.tags);
      props.get_todos(props.singleNote.id);
    },
    [props]
  );

  const edit = () => {
    setEditBool(!editBool);
  };

  const toggledelete = () => {
    setDelBool(!deleteBool);
  };

  return (
    <div className="modal">
      {props.singleNote.tags
        ? props.singleNote.tags.map(item => {
            return <h1 key={item.id}>{item.tags}</h1>;
          })
        : null}
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

const mapDispatchToProps = dispatch => {
  return {
    get_tags: tags => dispatch(get_tags(tags)),
    get_todos: id => dispatch(get_todos(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(singleNote);

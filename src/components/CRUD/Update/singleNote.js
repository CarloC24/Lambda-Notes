import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import '../../../CSS/index.scss';
import Note from './note';
import EditNote from './UpdateForm';
import Delete from './Delete';
import { get_todos, get_tags, delete_tags } from '../../../actions';

const singleNote = props => {
  const [editBool, setEditBool] = useState(false);
  const [deleteBool, setDelBool] = useState(false);
  useEffect(
    () => {
      props.get_tags(props.singleNote.id);
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

  const deleteTag = id => {
    props.delete_tags(id, props.singleNote.id);
  };

  return (
    <div className="modal">
      <div className="tags-icons">
        {props.tags
          ? props.tags.map((item, index) => {
              return (
                <div
                  className={item.tags}
                  onClick={() => deleteTag(item.id)}
                  key={index}
                />
              );
            })
          : null}
      </div>
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
    singleNote: state.singleNoteReducer.singleNote,
    tags: state.singleNoteReducer.tags
  };
};

const mapDispatchToProps = dispatch => {
  return {
    get_tags: tags => dispatch(get_tags(tags)),
    get_todos: id => dispatch(get_todos(id)),
    delete_tags: (id, singleNoteId) => dispatch(delete_tags(id, singleNoteId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(singleNote);

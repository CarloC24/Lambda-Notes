import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { add_todos, delete_todos, get_todos } from '../../../actions';
import '../../../CSS/index.scss';

const Todos = props => {
  const [singleTodo, handleSingleTodo] = useState({
    task: '',
    notes_id: props.singleId
  });
  useEffect(
    () => {
      if (props.singleId !== singleTodo.notes_id) {
        handleSingleTodo({
          ...singleTodo,
          notes_id: props.singleId
        });
      }
    },
    [props.singleId]
  );
  function change(e) {
    handleSingleTodo({
      ...singleTodo,
      [e.target.name]: e.target.value
    });
  }
  function submit(e) {
    e.preventDefault();
    if (singleTodo.task.length > 0) {
      props.add_todos(singleTodo.notes_id, singleTodo);
      handleSingleTodo({
        ...singleTodo,
        task: ''
      });
    } else {
      alert('todo field cannot be empty');
    }
  }

  function handleDelete(id) {
    props.delete_todos(singleTodo.notes_id, id);
  }
  return (
    <div className="todos-container">
      <h1 className="todos-header">Your todo's</h1>
      <ul>
        {props.todos ? (
          props.todos.map((item, index) => {
            return (
              <div className="todos" key={index}>
                <li className="todos-task">{item.task}</li>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="todos-button"
                >
                  DELETE
                </button>
              </div>
            );
          })
        ) : (
          <h1>false</h1>
        )}
      </ul>
      <form onSubmit={e => submit(e)}>
        <span className="input">
          <input
            onChange={e => change(e)}
            placeholder="add todos"
            value={singleTodo.todo}
            name="task"
          />
          <span />
        </span>
        <button type="submit" className="todos-add-button">
          ADD TODO
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.singleNoteReducer.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    add_todos: (singleNoteId, todos) =>
      dispatch(add_todos(singleNoteId, todos)),
    delete_todos: (singleNoteId, id) => dispatch(delete_todos(singleNoteId, id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);

import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import NotesMain from './components/NotesFunctions/Notes-Main';
import './CSS/index.scss';
import listview from './components/CRUD/Read/list-view';
import { connect } from 'react-redux';
import { show_notes } from './actions';

const App = props => {
  useEffect(() => {
    props.show_notes();
  }, []);
  return (
    <div className="App">
      <div className="notes-main">
        <Route path="/" component={NotesMain} />
      </div>
      <div className="notes-side">
        <h1>Notes go here</h1>
        <Route exact path="/" component={listview} />
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    show_notes: () => dispatch(show_notes())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);

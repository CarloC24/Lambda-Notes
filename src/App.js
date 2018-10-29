import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import NotesMain from './components/NotesFunctions/Notes-Main';
import newNote from './components/CRUD/Create/create-note';
import './CSS/index.scss';
import listView from './components/CRUD/Read/list-view';
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
        <Switch>
          <Route exact path="/" component={listView} />
          <Route exact path="/new" component={newNote} />
          <Route component={NotesMain} />
        </Switch>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    show_notes: () => dispatch(show_notes())
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);

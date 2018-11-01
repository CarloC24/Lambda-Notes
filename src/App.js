import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import NotesMain from './components/NotesFunctions/Notes-Main';
import newNote from './components/CRUD/Create/create-note';
import './CSS/index.scss';
import ListView from './components/CRUD/Read/list-view';
import { connect } from 'react-redux';
import { show_notes } from './actions';
import Login from './components/login';
import singleNote from './components/CRUD/Update/singleNote';

const App = theprops => {
  const [logInBool, setLogIn] = useState(true);
  useEffect(() => {
    theprops.show_notes();
  }, []);

  const toggleLogIn = () => {
    setLogIn(!logInBool);
  };
  console.log(theprops);
  return (
    <div>
      {logInBool ? (
        <Login toggle={toggleLogIn} />
      ) : (
        <div className="App">
          <div className="notes-main">
            <Route path="/" component={NotesMain} />
          </div>
          <div className="notes-side">
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <ListView
                    {...props}
                    notes={
                      theprops.filteredNotes.length > 0
                        ? theprops.filteredNotes
                        : theprops.notes
                    }
                  />
                )}
              />
              <Route exact path="/new" component={newNote} />
              <Route path="/:id" component={singleNote} />
            </Switch>
          </div>
        </div>
      )}
    </div>
  );
};
const mapStateToProps = state => {
  return {
    filteredNotes: state.notesReducer.filtered,
    notes: state.notesReducer.notes
  };
};
const mapDispatchToProps = dispatch => {
  return {
    show_notes: () => dispatch(show_notes())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);

import React, { useState, useEffect } from 'react';
import '../../CSS/index.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { filtered_notes, clear_filtered_notes } from '../../actions';

const Notes = props => {
  const [filteredNotes, setFilteredNotes] = useState([]);
  const filternotes = e => {
    const value = e.target.value;
    if (value.length > 0) {
      const filterednotes = props.notes.filter(
        item => (item.title.includes(value) ? item : null)
      );
      setFilteredNotes(filterednotes);
      props.filtered_notes(filteredNotes);
    } else {
      props.clear_filtered_notes();
    }
  };
  return (
    <div className="notes-functions">
      <h1>Lambda Notes</h1>
      <Link to="/">
        <div className="list-view">View Your Notes</div>
      </Link>
      <Link to="/new">
        <div className="add-notes">+ Create New Notes</div>
      </Link>
      <input
        type="text"
        onChange={e => filternotes(e)}
        placeholder="Search by title"
      />
    </div>
  );
};
const mapStateToProps = state => {
  return {
    notes: state.notesReducer.notes
  };
};

export default connect(
  mapStateToProps,
  { filtered_notes, clear_filtered_notes }
)(Notes);

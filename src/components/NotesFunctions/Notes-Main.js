import React, { useState } from 'react';
import '../../CSS/index.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { filtered_notes, clear_filtered_notes } from '../../actions';

const Notes = props => {
  const [filteredNotes, setFilteredNotes] = useState([]);
  const filternotes = e => {
    const value = e.target.value;
    if (value.length > 0) {
      const filterednotes = props.notes.filter(item =>
        item.title.includes(value) ? item : null
      );
      setFilteredNotes(filterednotes);
      props.filtered_notes(filteredNotes);
    } else {
      props.clear_filtered_notes();
    }
  };
  const exportFile = () => {
    let csvFile = [];
    let notes = props.notes;

    notes.map(item => {
      let row = [];
      row.push(JSON.stringify(item.title));
      row.push(JSON.stringify(item.textBody));
      row.push(JSON.stringify(item.created_by));
      return csvFile.push(row);
    });

    let a = document.createElement('a');
    a.href = `data:attachment/csv` + csvFile;
    a.target = '_Blank';
    a.download = 'testfile.csv';
    document.body.appendChild(a);
    a.click();
  };
  return (
    <div className="notes-functions">
      <h1>
        <span>λ</span>
        ambda Notes
      </h1>
      <div
        className="picture"
        style={{ backgroundImage: `url('${props.picture}')` }}
      />
      <Link to="/">
        <div className="list-view">View Your Notes</div>
      </Link>
      <Link to="/new">
        <div className="add-notes">+ Create New Notes</div>
      </Link>

      <span className="input">
        <input type="text" onChange={e => filternotes(e)} />
        <span />
      </span>

      <button onClick={() => exportFile()} className="button-3d">
        {' '}
        Export to CSV
      </button>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    notes: state.notesReducer.notes,
    picture: state.singleUser.picture
  };
};

export default connect(
  mapStateToProps,
  { filtered_notes, clear_filtered_notes }
)(Notes);

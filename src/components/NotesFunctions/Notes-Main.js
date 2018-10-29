import React from 'react';
import '../../CSS/index.scss';
import { Link, withRouter } from 'react-router-dom';

const Notes = () => {
  return (
    <div className="notes-functions">
      <h1>Lambda Notes</h1>
      <Link to="/">
        <div class="list-view">View Your Notes</div>
      </Link>
      <Link to="/new">
        <div class="add-notes">+ Create New Notes</div>
      </Link>
    </div>
  );
};

export default withRouter(Notes);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../../CSS/index.scss';
import { Link } from 'react-router-dom';

const listView = props => {
  console.log(props);
  return (
    <div className="list-container">
      <h1 className="list-heading">A cool note taking app by {props.name}</h1>
      <div className="list-notes">
        {props.notes.map(item => {
          return (
            <div className="notes" key={item._id}>
              <Link to={`/${item._id}`}>
                <h1 className="notes-heading">{item.title}</h1>
                <p className="notes-paragraph"> {item.textBody}</p>
              </Link>
            </div>
          );
        })}

        <div className="notes">
          <h1 className="notes-heading">Heading</h1>
          <p className="notes-paragraph">
            The pig is hungry with some bacon on the side
          </p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  notes: state.notesReducer.notes,
  name: state.notesReducer.name
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(listView);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const listView = () => {
  return (
    <div className="list-notes">
      <h1>Your notes</h1>
      <h1>Viewed notes</h1>
    </div>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(listView);

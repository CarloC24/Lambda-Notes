import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import '../../../CSS/index.scss';
import { Link } from 'react-router-dom';
import { singleNote } from '../../../actions';
import { TweenMax } from 'gsap/all';

const listView = props => {
  const array = [];

  useEffect(
    () => {
      TweenMax.staggerFrom(array, 0.2, { y: 1000, opacity: 0 }, 0.2);
    },
    [props.name]
  );
  console.log(array);
  return (
    <div className="list-container">
      <h1 className="list-heading">A cool note taking app by {props.name}</h1>
      <div className="list-notes">
        {props.notes.map((item, index) => {
          return (
            <div
              ref={div => (array[index] = div)}
              className="notes draw meet"
              key={item._id}
              onClick={() => props.singleNote(item)}
            >
              <Link to={`/${item._id}`}>
                <h1 className="notes-heading">{item.title}</h1>
                <p className="notes-paragraph"> {item.textBody}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  name: state.notesReducer.name
});

const mapDispatchToProps = dispatch => {
  return {
    singleNote: note => dispatch(singleNote(note))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(listView);

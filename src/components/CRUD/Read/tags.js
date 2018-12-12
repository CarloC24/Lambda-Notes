import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { add_tags } from '../../../actions';
import '../../../CSS/index.scss';

const tags = props => {
  const [tags, setTags] = useState({
    tags: '',
    notes_id: props.singleId
  });

  useEffect(
    () => {
      if (props.singleId !== tags.notes_id) {
        setTags({
          ...tags,
          notes_id: props.singleId
        });
      }
    },
    [props.singleId]
  );
  function handleChange(e) {
    setTags({
      ...tags,
      tags: e.target.value
    });
  }
  function addTag(e) {
    e.preventDefault();
    props.add_tags(tags, tags.notes_id);
  }

  return (
    <div className="tags-container">
      <select onChange={e => handleChange(e)}>
        <option value="Completed">Completed</option>
        <option value="In-Progress">In-Progress</option>
        <option value="Deprecated">Deprecated</option>
        <option defaultValue />
      </select>
      <button onClick={e => addTag(e)}>Add tag</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    add_tags: (tags, id) => dispatch(add_tags(tags, id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(tags);

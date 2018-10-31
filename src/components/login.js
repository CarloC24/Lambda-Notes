import React from 'react';
import '../CSS/index.scss';

export default props => {
  return (
    <div className="login">
      <h1 className="login-heading">Welcome to lambda notes</h1>
      <button onClick={() => props.toggle()} className="login-button">
        Login
      </button>
    </div>
  );
};

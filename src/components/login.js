import React from 'react';

export default props => {
  return (
    <div>
      <form>
        <h1>Welcome to lambda notes</h1>
        <input type="text" />
        <input type="text" />
        <button onClick={() => props.toggle()}>Login</button>
      </form>
    </div>
  );
};

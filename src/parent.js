import React from 'react';
function Parent(props) {
  return (
    <div>
      <h1>Name of his first child is {props.child1}</h1>
      <h1>Name of his second child is {props.child2}</h1>
    </div>
  );
}
export default Parent;
import React from 'react';
import './App.css';
import Parent from './parent.js';
function App() {
  return (
    <div className='App'>
      <Parent child1='Ali' child2='Hina' />
      <hr />
      <Parent child1='Sara' child2='Sarim' />
    </div>
  );
}

export default App;

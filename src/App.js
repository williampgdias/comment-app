import React from 'react';
import './App.css';
import Comment from './components/Comment';

function App() {
  return (
    <div className='App'>
      <h1>My Comment App</h1>
      <Comment name='William Dias' email='williamdias@gmail.com' date={new Date()} message='I am doing this project to learn React.js.' />
      <Comment name='Bárbara Moreira' email='babi@gmail.com' date={new Date()} message='My husband is learning React.js' />
    </div>
  );
}

export default App;

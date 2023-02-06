import React from 'react';
import './App.css';

// COMPONENTS
import Comment from './components/Comment';

class App extends React.Component {
  state = {
    comments: [
      {
        name: 'William Dias',
        email: 'williamdias@gmail.com',
        date: new Date(),
        message: 'I am doing this project to learn React.js',
      },
      {
        name: 'Bárbara Moreira',
        email: 'babi@gmail.com',
        date: new Date(),
        message: 'My husband is learning React.js',
      },
      {
        name: 'Laura Dias',
        email: 'laura@gmail.com',
        date: new Date(),
        message: 'I love my daddy',
      },
    ],
  };

  addComment = () => {
    const newComment = {
      name: 'Zeiry Dias',
      email: 'zeiry@gmail.com',
      date: new Date(),
      message: 'I am Williams mother.',
    };

    this.setState({
      comments: [...this.state.comments, newComment],
    });
  };

  render() {
    return (
      <div className='App'>
        <h1>My Comment App</h1>
        {this.state.comments.map((comment, index) => {
          return (
            <Comment
              key={index}
              name={comment.name}
              email={comment.email}
              date={comment.date}
              message={comment.message}
            />
          );
        })}

        <button onClick={this.addComment}>Add Comment.</button>
      </div>
    );
  }
}

export default App;

import React from "react";
import "./App.css";
import Comment from "./components/Comment";

class App extends React.Component {
  state = {
    comments: [
      {
        name: "William Dias",
        email: "smdwilliam89@gmail.com",
        date: new Date(),
        message: "I am learning React with Jonathan",
      },
      {
        name: "Bárbara Moreira",
        email: "bcarvalho089@gmail.com",
        date: new Date(),
        message: "My husband is learning React with Jonathan.",
      },
    ],
  };

  addComment = () => {
    const newComment = {
      name: "Felipe Melo",
      email: "felipe@gmail.com",
      date: new Date(),
      message: "Exemplo de comentário",
    };

    this.setState({
      comments: [...this.state.comments, newComment],
    });
  };

  render() {
    return (
      <div className='App'>
        <h1>My Comments App</h1>
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
        <button onClick={this.addComment}>Add comment</button>
      </div>
    );
  }
}

export default App;

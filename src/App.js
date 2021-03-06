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
    form: {
      name: "",
      email: "",
      message: "",
    },
  };

  addComment = (e) => {
    e.preventDefault();

    const newComment = { ...this.state.form, date: new Date() };

    this.setState({
      comments: [...this.state.comments, newComment],
      form: {
        name: "",
        email: "",
        message: "",
      },
    });
  };

  onFieldChanged = (e) => {
    const newCommentForm = this.state.form;
    newCommentForm[e.target.name] = e.target.value;

    this.setState({
      form: newCommentForm,
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

        <form onSubmit={this.addComment}>
          <h2>Add a comment</h2>
          <div>
            <input
              onChange={this.onFieldChanged}
              value={this.state.form.name}
              type='text'
              name='name'
              placeholder='Type here your name'
              required='required'
            />
          </div>
          <div>
            <input
              onChange={this.onFieldChanged}
              value={this.state.form.email}
              type='email'
              name='email'
              placeholder='Type here your email'
              required='required'
            />
          </div>
          <div>
            <textarea
              onChange={this.onFieldChanged}
              value={this.state.form.message}
              name='message'
              rows='4'
              placeholder='Type here your message'
              required='required'
            />
          </div>
          <button type='submit'>Add a comment</button>
        </form>
      </div>
    );
  }
}

export default App;

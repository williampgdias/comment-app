import "./App.css";
import Comment from "./components/Comment";

function App() {
  return (
    <div className='App'>
      <h1>My Comments App</h1>
      <Comment
        name='William Dias'
        email='smdwilliam89@gmail.com'
        date={new Date()}
        message='I am learning React with Jonathan.'
      />

      <Comment
        name='Bárbara Moreira'
        email='bcarvalho089@gmail.com'
        date={new Date()}
        message='I am learning React with Jonathan.'
      />
    </div>
  );
}

export default App;

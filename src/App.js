import logo from './logo.svg';
import './App.css';
import Post from './UIElements/Post/Post';


function App() {

  const handleDivClick = () => {
    console.log("div scroll")
  }

  const handlePostClick = () => {
    console.log("Post scroll")
  }

  return (
    <div onScroll={handleDivClick}>
      <Post onScroll={handlePostClick}/>
    </div>
  );
}

export default App;

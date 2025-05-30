import React from "react";
import "./App.css";

function App() {
  return (
    <div id="quote-box" className="App">
      <p id="text">Here will be a text of quote</p>
      <p id="author">Here will be an author</p>
      <button id="new-quote">New quote</button>
      <a id="tweet-quote" href="https://twitter.com/intent/tweet">
        <i></i>
      </a>
    </div>
  );
}

export default App;

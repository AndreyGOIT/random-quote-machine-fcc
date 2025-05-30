import { useState, useEffect } from "react";
import "./App.css";

const quotes = [
  {
    content:
      "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    content: "Life is really simple, but we insist on making it complicated.",
    author: "Confucius",
  },
  {
    content: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
  },
  {
    content: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    content: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
  },
];

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const fetchQuote = async () => {
    try {
      // Выбор случайной
      const random = quotes[Math.floor(Math.random() * quotes.length)];
      const { content, author } = random;
      setQuote(content);
      setAuthor(author);
    } catch (error) {
      setQuote("Failed to fetch quote.");
      setAuthor("");
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const getRandomQuote = () => {
    fetchQuote();
  };

  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `"${quote}" - ${author}`
  )}`;

  return (
    <div id="quote-box" className="App">
      <p id="text">"{quote}"</p>
      <p id="author">- {author}</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: 20,
        }}
      >
        <a
          id="tweet-quote"
          href={tweetUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="twitter-button"
        >
          <i className="fab fa-twitter"></i> Tweet
        </a>
        <button id="new-quote" onClick={getRandomQuote}>
          NEW QUOTE
        </button>
      </div>
    </div>
  );
}

export default App;

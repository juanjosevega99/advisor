"use client";

import { useState, useEffect } from "react";
import data from "./mocks/quotes.json";
import "../styles/globals.css";

interface QuoteList {
  Quotes: {
    id: number;
    quote: string;
    author: string;
  }[];
}

function getRandomQuote(quotes: QuoteList) {
  const randomIndex = Math.floor(Math.random() * quotes.Quotes.length);
  const randomQuote = quotes.Quotes[randomIndex];
  return randomQuote;
}

export default function Home() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    const randomQuote = getRandomQuote(data);
    setQuote(randomQuote.quote);
    setAuthor(randomQuote.author);
  }, []);

  const handleClick = () => {
    const randomQuote = getRandomQuote(data);
    setQuote(randomQuote.quote);
    setAuthor(randomQuote.author);
  };

  return (
    <>
      {quote && author && (
        <main
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          <h1
            style={{
              fontSize: "2rem",
              fontStyle: "italic",
              marginBottom: "1rem",
            }}
          >
            {quote}
          </h1>
          <h3
            style={{
              fontSize: "1.5rem",
              fontStyle: "italic",
              fontFamily: "Dancing Script, cursive",
            }}
          >
            {author}
          </h3>
          <button
            style={{
              backgroundColor: '#00152C',
              color: "white",
              border: "none",
              borderRadius: "10px",
              padding: "10px 20px",
              fontSize: "1.0rem",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onClick={() => {
              const randomQuote = getRandomQuote(data);
              setQuote(randomQuote.quote);
              setAuthor(randomQuote.author);
            }}
          >
            Change Quote
          </button>
        </main>
      )}
    </>
  );
}

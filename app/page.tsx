"use client";

import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { Quotes } from "../shared/quotesInterface";
import { getQuotes } from "../firebase/client";

function getRandomQuote(quotes) {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  return randomQuote;
}

export default function Home() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    const fetchQuotes = async () => {
      const quotes = await getQuotes();
      const randomQuote = getRandomQuote(quotes);
      setQuote(randomQuote.quote);
      setAuthor(randomQuote.author);
    };
    fetchQuotes();
  }, []);

  return (
    <>
      {quote && author && (
        <main className={styles.main}>
          <h1 className={styles.title}>{quote}</h1>
          <p className={styles.p}>{author}</p>
          <button
            className={styles.button}
            onClick={async () => {
              const quotes = await getQuotes();
              const randomQuote = getRandomQuote(quotes);
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

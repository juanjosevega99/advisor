"use client";

import { useState, useEffect } from "react";
import data from "./mocks/quotes.json";
import styles from "./styles.module.css";
import { QuoteList } from "../shared/quotesInterface";

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

  return (
    <>
      {quote && author && (
        <main className={styles.main}>
          <h1 className={styles.title}>{quote}</h1>
          <p className={styles.p}>{author}</p>
          <button
            className={styles.button}
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

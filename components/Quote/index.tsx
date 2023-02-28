"use client";

import { useState, useEffect } from "react";
import { getQuotes } from "../../firebase/client";
import { Quote } from "../../shared/quotesInterface";
import styles from "./styles.module.css";

export function QuoteLayout() {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    const fetchQuotes = async () => {
      const quotes = await getQuotes();
      setQuotes(quotes);
    };
    fetchQuotes();
  }, []);

  return (
    <div className={styles.container}>
      {quotes.map((quote) => (
        <div key={quote.id} className={styles.card}>
          <h3>{quote.quote}</h3>
          <p>{quote.author}</p>
        </div>
      ))}
    </div>
  );
}

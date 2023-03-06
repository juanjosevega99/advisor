"use client";

import styles from "./styles.module.css";
import { useQuotes } from "../../hooks/useQuotes";

export function QuoteLayout() {
  const { quotes } = useQuotes();

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

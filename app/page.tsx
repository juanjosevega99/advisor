"use client";

import styles from "./styles.module.css";
import { useQuotes } from "../hooks/useQuotes";

export default function Home() {
  const { quote, author, fetchQuotes } = useQuotes();

  return (
    <>
      {quote && author && (
        <main className={styles.main}>
          <h1 className={styles.title}>{quote}</h1>
          <p className={styles.p}>{author}</p>
          <button className={styles.button} onClick={fetchQuotes}>
            Change Quote
          </button>
        </main>
      )}
    </>
  );
}

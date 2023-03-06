"use client";

import { useState } from "react";
import { addQuote } from "../../firebase/client";
import styles from "./styles.module.css";

export function CreateQuote() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = async () => {
    const newQuote = { quote, author };
    await addQuote(newQuote);
    setQuote("");
    setAuthor("");
    window.location.reload();
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder="Add your quote here"
        onChange={(e) => setQuote(e.target.value)}
        value={quote}
        autoFocus
      />
      <input
        className={styles.inputAuthor}
        type="text"
        placeholder="author here"
        onChange={(e) => setAuthor(e.target.value)}
        value={author}
      />
      <button onClick={handleSubmit} className={styles.button}>
        save
      </button>
    </div>
  );
}

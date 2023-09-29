'use client';

import Link from 'next/link';
import styles from './styles.module.css';
import { useRandomQuote } from '../hooks/useRandomQuote';

export default function Home() {
  const { quote, author, fetchQuotes } = useRandomQuote();

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
      <Link href='/quotes' className={styles.bottomRightLink}>
        Go to Quotes
      </Link>
    </>
  );
}

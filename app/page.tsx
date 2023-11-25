'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './styles.module.css';
import { useRandomQuote } from '../hooks/useRandomQuote';

export default function Home() {
  const [language, setLanguage] = useState('');
  const { quote, author, fetchQuotes } = useRandomQuote();

  const handleQuoteChangeClick = async () => {
    await fetchQuotes(language); // Fetch quotes based on current language state
  };

  const handleUseMyLanguageClick = () => {
    const userLanguage = navigator.language.split('-')[0]; // 'en-US' becomes 'en'
    setLanguage(userLanguage); // Update language state
    fetchQuotes(userLanguage); // Fetch quotes in user's language
  };

  return (
    <>
      {quote && author && (
        <main className={styles.main}>
          <h1 className={styles.title}>{quote}</h1>
          <p className={styles.p}>{author}</p>
          <button className={styles.button} onClick={handleQuoteChangeClick}>
            {/* <button className={styles.button} onClick={fetchQuotes}> */}
            Change Quote
          </button>
        </main>
      )}
      <div className={styles.bottomRightLink}>
        <a onClick={handleUseMyLanguageClick}>Use my language</a>
        <Link href='/quotes'>Go to Quotes</Link>
      </div>
    </>
  );
}

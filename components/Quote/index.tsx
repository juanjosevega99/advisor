'use client';

import styles from './styles.module.css';
import { QuoteLayoutProps } from '../../shared/quotesInterface';

export function QuoteLayout({ quotes }: QuoteLayoutProps) {
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

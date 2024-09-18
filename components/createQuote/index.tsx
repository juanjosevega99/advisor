'use client';

import { useState, useEffect } from 'react';
import { addQuote } from '../../firebase/client';
import styles from './styles.module.css';
import Notification from '../Notification';
import { CreateQuoteProps } from '../../shared/quotesInterface';

export function CreateQuote({ addNewQuote }: CreateQuoteProps) {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'error' | 'success' | null>(
    null
  );

  const handleSubmit = async () => {
    const newQuote = {
      quote: quote.trim(),
      author: author.trim(),
    };

    if (!newQuote.quote || !newQuote.author) {
      setMessage('Please enter both a quote and an author.');
      setMessageType('error');
      return;
    }

    const response = await addQuote(newQuote);

    if (response.success) {
      addNewQuote(newQuote);
      setMessage(response.message);
      setMessageType('success');
      setQuote('');
      setAuthor('');
    } else {
      setMessage(response.message);
      setMessageType('error');
    }
  };

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (messageType) {
      timer = setTimeout(() => {
        setMessageType(null);
        setMessage('');
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [messageType]);

  return (
    <div>
      <Notification message={message} type={messageType} />
      <div className={styles.container}>
        <input
          className={styles.input}
          type='text'
          placeholder='Add your quote here'
          onChange={(e) => setQuote(e.target.value)}
          value={quote}
          autoFocus
        />
        <input
          className={styles.inputAuthor}
          type='text'
          placeholder='Author here'
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
        />
        <button onClick={handleSubmit} className={styles.button}>
          save
        </button>
      </div>
    </div>
  );
}

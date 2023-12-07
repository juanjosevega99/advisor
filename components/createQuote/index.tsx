'use client';

import { useState } from 'react';
import { addQuote } from '../../firebase/client';
import styles from './styles.module.css';
import Notification from '../Notification';

export function CreateQuote() {
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
      setMessage(response.message);
      setMessageType('success');
      setQuote('');
      setAuthor('');
      window.location.reload();
    } else {
      setMessage(response.message);
      setMessageType('error');
    }
  };

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
          placeholder='author here'
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

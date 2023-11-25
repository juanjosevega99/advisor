import { useState, useEffect } from 'react';
import { getQuotes } from '../firebase/client';
import { Quote } from '../shared/quotesInterface';

function getRandomQuote(quotes: Quote[]) {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  return randomQuote;
}

export function useRandomQuote() {
  const [quote, setQuote] = useState<Quote>();

  const fetchQuotes = async (language = '') => {
    const quotesFirebase = await getQuotes(language);
    const randomQuote = getRandomQuote(quotesFirebase);
    setQuote(randomQuote);
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  return { fetchQuotes, quote: quote?.quote, author: quote?.author };
}

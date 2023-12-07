import { useState, useEffect } from 'react';
import { getQuotes } from '../firebase/client';
import { Quote, newQuote } from '../shared/quotesInterface';

export function useQuotes() {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    const fetchQuotes = async () => {
      const quotes = await getQuotes();
      setQuotes(quotes);
    };
    fetchQuotes();
  }, []);

  const addNewQuote = (newQuote: newQuote) => {
    const tempId = `temp-${new Date().getTime()}`;
    const quoteWithId = { ...newQuote, id: tempId };
    setQuotes((currentQuotes) => [...currentQuotes, quoteWithId]);
  };

  return { quotes, addNewQuote };
}

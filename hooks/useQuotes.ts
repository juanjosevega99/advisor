import { useState, useEffect, useCallback, useRef } from "react";
import { getQuotes } from "../firebase/client";
import { Quote } from "../shared/quotesInterface";

function getRandomQuote(quotes: Quote[]) {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  return randomQuote;
}

export function useQuotes() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const isInitialRender = useRef(true);

  const fetchQuotes = useCallback(async () => {
    const quotes = await getQuotes();
    const randomQuote = getRandomQuote(quotes);
    setQuote(randomQuote.quote);
    setAuthor(randomQuote.author);
  }, []);

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
    } else {
      fetchQuotes();
    }
  }, [fetchQuotes]);

  return { fetchQuotes, quote, author };
}

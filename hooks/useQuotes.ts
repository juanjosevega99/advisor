import { useState, useEffect } from "react";
import { getQuotes } from "../firebase/client";
import { Quote } from "../shared/quotesInterface";

export function useQuotes() {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    const fetchQuotes = async () => {
      const quotes = await getQuotes();
      setQuotes(quotes);
    };
    fetchQuotes();
  }, []);

  return { quotes };
}

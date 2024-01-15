'use client';

import { QuoteLayout } from '../../components/Quote';
import { CreateQuote } from '../../components/createQuote';
import { useQuotes } from '../../hooks/useQuotes';

export default function QuotesAdmin() {
  const { quotes, addNewQuote } = useQuotes();

  return (
    <main>
      <CreateQuote addNewQuote={addNewQuote} />
      <QuoteLayout quotes={quotes} />
    </main>
  );
}

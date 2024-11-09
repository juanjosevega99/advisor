export interface Quote {
  id: string;
  quote: string;
  author: string;
}

export interface newQuote {
  quote: string;
  author: string;
  dateAdded: string;
}

interface AddNewQuoteFunction {
  (newQuote: newQuote): void;
}

export interface CreateQuoteProps {
  addNewQuote: AddNewQuoteFunction;
}

export interface QuoteLayoutProps {
  quotes: Quote[];
}

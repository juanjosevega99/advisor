// import quotesData from '' assert { type: 'json' };
// import { franc } from 'franc';

const quotesData = {
  Quotes: [
    {
      id: '0iiMLSkbKyW5qIct5etE',
      quote: 'Mercy to the guilty is cruelty to the innocent',
      author: 'Adam Smith',
    },
  ],
};

interface Quote {
  id: string;
  quote: string;
  // any other properties that a quote might have
}

function detectLanguage(text: string): string {
  // const langCode: string = franc(text);
  const langCode: string = 'en';
  switch (langCode) {
    case 'eng':
      return 'en';
    case 'spa':
      return 'es';
    default:
      return 'unknown';
  }
}

export function processQuotes(quotesArray: Quote[]): void {
  quotesArray.forEach(async (quote: Quote) => {
    const language: string = detectLanguage(quote.quote);
    console.log(`Quote ID ${quote.id} is in language: ${language}`);

    // const quoteRef = doc(db, 'quotes', quote.id);
    // await updateDoc(quoteRef, {
    //   language: language,
    // });
  });
}

// const { Quotes } = quotesData;
// processQuotes(Quotes);

import data from "./mocks/quotes.json";
import '../styles/globals.css'

interface QuoteList {
  Quotes: {
    id: number;
    quote: string;
    author: string;
  }[];
}

function getRandomQuote(quotes: QuoteList) {
  const randomIndex = Math.floor(Math.random() * quotes.Quotes.length);
  const randomQuote = quotes.Quotes[randomIndex];
  return randomQuote;
}

export default function Home() {
  const { quote, author } = getRandomQuote(data);

  return (
    <main
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      <h1
        style={{ fontSize: "2rem", fontStyle: "italic", marginBottom: "1rem" }}
      >
        {quote}
      </h1>
      <h3
        style={{
          fontSize: "1.5rem",
          fontStyle: "italic",
          fontFamily: "Dancing Script, cursive",
        }}
      >
        {author}
      </h3>
    </main>
  );
}

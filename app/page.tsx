import { useEffect, useState } from "react";
import "../styles/globals.css";

interface Quote {
  id: number;
  quote: string;
  author: string;
}

function getRandomQuote(quotes: Quote[]) {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  return randomQuote;
}

export default function Home() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const timestamp = Date.now();
      const response = await fetch(`/mocks/quotes.json?timestamp=${timestamp}`);
      const data = await response.json();
      const randomQuote = getRandomQuote(data.quotes);
      setQuote(randomQuote.quote);
      setAuthor(randomQuote.author);
    };
    fetchData();
  }, []);

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

import { QuoteList } from "../../shared/quotesInterface";
import styles from "./styles.module.css";

interface Props {
  data: QuoteList;
}

export function QuoteLayout({ data }: Props) {
  const quotes = data.Quotes;

  return (
    <div className={styles.container}>
      {quotes.map((quote) => (
        <div key={quote.id} className={styles.card}>
          <h3>{quote.quote}</h3>
          <p>{quote.author}</p>
        </div>
      ))}
    </div>
  );
}

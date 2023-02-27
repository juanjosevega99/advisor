import data from "../mocks/quotes.json";
import { QuoteLayout } from "../../components/Quote";

export default function QuotesAdmin() {
  return (
    <main>
      <QuoteLayout data={data} />
    </main>
  );
}

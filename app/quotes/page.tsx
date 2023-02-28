import { QuoteLayout } from "../../components/Quote";
import { CreateQuote } from "../../components/createQuote";

export default function QuotesAdmin() {
  return (
    <main>
      <CreateQuote />
      <QuoteLayout />
    </main>
  );
}

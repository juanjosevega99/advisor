import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  query,
  where,
} from 'firebase/firestore/lite';
import { newQuote } from '../shared/quotesInterface';

const firebaseConfig =
  process.env.NEXT_PUBLIC_FIREBASE_CONFIG &&
  JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_CONFIG);

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getQuotes(language = '') {
  const quotesCol = collection(db, 'quotes');

  let q;
  if (language) {
    q = query(quotesCol, where('language', '==', language));
  } else {
    q = quotesCol;
  }

  const snapshot = await getDocs(q);
  const quotes = snapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      quote: data.quote,
      author: data.author,
    };
  });
  return quotes;
}

export async function addQuote(newQuote: newQuote) {
  const quotesCol = collection(db, 'quotes');
  await addDoc(quotesCol, newQuote);
}

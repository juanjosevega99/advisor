import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = process.env.NEXT_PUBLIC_FIREBASE_CONFIG && JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_CONFIG);

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getQuotes() {
  const quotesCol = collection(db, "quotes");
  const snapshot = await getDocs(quotesCol);
  const quotes = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return quotes;
}

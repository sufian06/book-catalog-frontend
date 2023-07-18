import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC5SwvNUwcTgTd7qBn73sSTAawvHVgT1H0",
  authDomain: "book-catalog-2a79f.firebaseapp.com",
  projectId: "book-catalog-2a79f",
  storageBucket: "book-catalog-2a79f.appspot.com",
  messagingSenderId: "813645807415",
  appId: "1:813645807415:web:cb7b9f9ee9bd3ca30364b2"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

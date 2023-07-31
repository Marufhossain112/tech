import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
const firebaseConfig = {
  apiKey: 'AIzaSyBxrdCDh81jRpL7nMHNTN6lm83UFUH3BB4',

  authDomain: 'tech-net-15a7e.firebaseapp.com',

  projectId: 'tech-net-15a7e',

  storageBucket: 'tech-net-15a7e.appspot.com',

  messagingSenderId: '649574578065',

  appId: '1:649574578065:web:8ef44f8c75dbeb781e8c30',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

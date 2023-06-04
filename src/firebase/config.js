import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyBv83k9YKj4N3ut5DHrQen3qnNmedeCYjE",
  authDomain: "react-apps-redux.firebaseapp.com",
  projectId: "react-apps-redux",
  storageBucket: "react-apps-redux.appspot.com",
  messagingSenderId: "79783597510",
  appId: "1:79783597510:web:757ceaa9f24fb2bdc4cec7",
  measurementId: "G-21172B07YQ"
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB   = getFirestore(FirebaseApp);
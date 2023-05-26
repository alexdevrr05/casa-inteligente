// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCXBkTBMw-FyhHSbUtncbm2nS6733r0cQI',
  authDomain: 'react-journal-app-a1931.firebaseapp.com',
  projectId: 'react-journal-app-a1931',
  storageBucket: 'react-journal-app-a1931.appspot.com',
  messagingSenderId: '442177938973',
  appId: '1:442177938973:web:7b1f5eac8d0f5eeadd88f4',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeYGZs3PFGy1jgcVEBCIjEiGaDVP4q9o0",
  authDomain: "expense-tracker-3b26e.firebaseapp.com",
  projectId: "expense-tracker-3b26e",
  storageBucket: "expense-tracker-3b26e.appspot.com",
  messagingSenderId: "944857201019",
  appId: "1:944857201019:web:91eac41747f03fb10a25de",
  measurementId: "G-2PELEMJP2L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

// firebase login
// firebase init
// firebase deploy
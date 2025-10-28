// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuyp_tfkKWhf2C9KLQUqHxG_fCREXVV9M",
  authDomain: "expense-tracker-834c5.firebaseapp.com",
  projectId: "expense-tracker-834c5",
  storageBucket: "expense-tracker-834c5.firebasestorage.app",
  messagingSenderId: "770084278037",
  appId: "1:770084278037:web:6df9dc64a2ea546738231c",
  measurementId: "G-5832C94L8C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApJVZKxCgiJhXyR6rmTJbnvQhhfpH2Hyw",
  authDomain: "reactform-b34a8.firebaseapp.com",
  projectId: "reactform-b34a8",
  storageBucket: "reactform-b34a8.firebasestorage.app",
  messagingSenderId: "276489943259",
  appId: "1:276489943259:web:f80a6800d3fb0b6b38b4fe",
  measurementId: "G-7REG86PC5Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db =  getFirestore(app)